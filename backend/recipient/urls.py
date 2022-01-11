from django.urls import path
from .views import register_recipient

urlpatterns = [
    path('register/',register_recipient),
]