from pathlib import Path

import requests
from django.http import HttpResponse, HttpResponsePermanentRedirect
from django.shortcuts import redirect
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie, csrf_protect
from mjml import mjml2html
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from rest_framework.views import APIView
from .models import ContactForm
from .serializers import ContactFormSerializer
from django.conf import settings


class ContactFormView(APIView):

    def post(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                self.process_form(serializer)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Exception as e:
                print(f"Error processing form: {e}")
                return Response({"detail": "An error occurred while processing your request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def get_serializer(data):
        return ContactFormSerializer(data=data)

    def process_form(self, serializer):
        print(14124214)
        try:
            serializer.save()
            sender_email = serializer.validated_data['email']
            sender_name = serializer.validated_data['name']
            self.send_notification_email(sender_email, sender_name, serializer.validated_data['content'])
            self.send_confirmation_email(sender_email, sender_name)
        except Exception as e:
            print(f"Error saving form data or sending emails: {e}")
            raise

    @staticmethod
    def send_notification_email(sender_email, sender_name, message_content):
        try:
            subject = f"New Contact Form Submission from {sender_name}"
            message = (
                f"You have received a new contact form submission.\n\n"
                f"Name: {sender_name}\n"
                f"Email: {sender_email}\n\n"
                f"Message:\n{message_content}\n\n"
            )
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                settings.EMAIL_RECEIVERS,
                fail_silently=False,
            )
        except Exception as e:
            print(f"Error sending notification email: {e}")
            raise

    def send_confirmation_email(self, recipient_email, sender_name):
        try:
            html_content = self.generate_confirmation_email_content(sender_name)
            send_mail(
                subject="Thank you for contacting Formamind",
                message='',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[recipient_email],
                fail_silently=False,
                html_message=html_content,
            )
            print(f"Confirmation email sent to {recipient_email}")
        except Exception as e:
            print(f"Error sending confirmation email: {e}")
            raise

    @staticmethod
    def generate_confirmation_email_content(sender_name):
        try:
            mjml_path = Path(settings.PROJECT_DIR, 'emails', 'confirmation.mjml')
            with open(mjml_path, 'r') as mjml_file:
                mjml_template = mjml_file.read()

            result = mjml2html.mjml_to_html(mjml_template)

            if result['errors']:
                print(f"Errors in MJML conversion: {result['errors']}")
                return "<p>Thank you for contacting us. We have received your message.</p>"
            return result["html"].replace("$name", sender_name)

        except Exception as e:
            print(f"Error generating confirmation email content: {e}")
            return "<p>Thank you for contacting us. We have received your message.</p>"

