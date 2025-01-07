from django.urls import path, re_path
from django.views.generic import RedirectView

from .views import ContactFormView

urlpatterns = [
    path('contact-form/', ContactFormView.as_view(), name='contact-form'),
]
