from pathlib import Path
from pprint import pprint

import requests
from datetime import datetime, timedelta
from django.core.mail import send_mail
from django.core.management.base import BaseCommand
from django.conf import settings
from mjml import mjml2html

from formamind_backend.settings.base import BASE_DIR


class Command(BaseCommand):
    help = 'Scrapes new organisations from KRS and sends an email to them'

    KRS_API_BASE_URL = "https://api-krs.ms.gov.pl/api"
    HOUR_START = '00'
    HOUR_END = '23'

    def handle(self, *args, **kwargs):
        print(f"Starting task: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

        yesterday_date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')

        krs_bulletin_url = self._construct_bulletin_url(yesterday_date)
        organisation_ids = self._fetch_organisation_ids(krs_bulletin_url)

        emails = self._fetch_emails_for_organisations(organisation_ids, yesterday_date)
        # emails = ["fyblwchpost@gmail.com", "f.lajszczak@gmail.com", "franciszek@formamind.com"]

        if emails:
            self._send_emails(emails)
            print(f"Processed {len(emails)} emails.")
        else:
            print("No emails found for today.")

    def _construct_bulletin_url(self, date):
        return f"{self.KRS_API_BASE_URL}/Krs/Biuletyn/{date}?godzinaOd={self.HOUR_START}&godzinaDo={self.HOUR_END}"

    def _fetch_organisation_ids(self, url):
        try:
            response = requests.get(url)
            response.raise_for_status()
            return [krs for krs in response.json() if len(krs) >= 7]
        except requests.RequestException as e:
            print(f"Failed to fetch organisation IDs: {e}")
            return []

    def _fetch_emails_for_organisations(self, organisation_ids, target_date):
        emails = []
        for krs in organisation_ids:
            email = self._fetch_email_from_krs(krs, target_date)
            if email:
                emails.append(email)
        print("")
        return emails

    def _fetch_email_from_krs(self, krs, target_date):
        for registry in ['P', 'S']:
            details_url = self._construct_details_url(krs, registry)
            email = self._extract_email_from_details(details_url, target_date, krs, registry)
            if email:
                return email
        return None

    def _construct_details_url(self, krs, registry):
        return f"{self.KRS_API_BASE_URL}/krs/OdpisAktualny/{krs}?rejestr={registry}&format=json"

    def _extract_email_from_details(self, url, target_date, krs, registry):
        try:
            response = requests.get(url)
            response.raise_for_status()

            details = response.json()
            registration_date = self._format_registration_date(details["odpis"]["naglowekA"]["dataRejestracjiWKRS"])

            if registration_date == target_date:
                email = details["odpis"]["dane"]["dzial1"]["siedzibaIAdres"]["adresPocztyElektronicznej"]
                print(f"SUCCESS  | {krs} | {registry} | {email}")
                return email

            else:
                print(f"REG. DATE | {krs} | {registry}")

        except (requests.RequestException, KeyError) as e:
            print(f"ERROR 404 | {krs} | {registry}")

        return None

    def _format_registration_date(self, date_str):
        return '-'.join(date_str.split('.')[::-1])

    def _send_emails(self, emails):
        for email in emails:
            if email:
                try:
                    html_content = self._render_mjml_template()
                    send_mail(
                        subject='Formamind: Gratulujemy wpisu do KRS!',
                        message='',
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=[email],
                        fail_silently=False,
                        html_message=html_content,
                    )
                    print(f"Email sent to {email}")

                except Exception as e:
                    print(f"Failed to send email to {email}: {e}")

    def _render_mjml_template(self):
        mjml_path = Path(settings.PROJECT_DIR, 'emails', 'krs.mjml')

        with open(mjml_path, 'r') as file:
            mjml_template = file.read()

        result = mjml2html.mjml_to_html(mjml_template)
        return result['html'] if result['errors'] == [] else None
