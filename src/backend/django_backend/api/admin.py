from django.contrib import admin
from .models import ContactForm


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'content', 'created_at')
    search_fields = ('name', 'email', 'content')
    list_filter = ('created_at',)
