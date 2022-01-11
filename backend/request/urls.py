from django.urls import path
from .views import process_request

urlpatterns = [
    path('requests/',process_request),
]