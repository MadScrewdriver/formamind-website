from .base import *

DEBUG = True

SECRET_KEY = "django-insecure-yrbnt3%1gn3yyihq=nn9^h-tuek8*u@!#k208ylpx8)9m&$4xg"

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


try:
    from .local import *
except ImportError:
    pass
