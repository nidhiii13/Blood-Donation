from django.db.models.base import Model
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.serializers import ModelSerializer
from recipient.models import Recipient
from request.models import Request
from request.search import search_donor
from .serializer import RecipientSerializer
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
# Create your views here.

@api_view(["POST"])
def register_recipient(request):
    data = request.data
    serializer = RecipientSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        try:
            email = Recipient.objects.get(email=request.data.get('email'))
            print(email.id)
            req = Request.objects.create(email=email,blood_group=request.data.get('blood_group'),city=request.data.get('city'),request_initiate=True,request_end=False)
            search_donor(email.id,request.data.get('blood_group'),city=request.data.get('city'))
        except:
             return Response({'msg1':'fail'},status=HTTP_400_BAD_REQUEST)
    else:
        return Response({'msg2':'fail'},status=HTTP_400_BAD_REQUEST)
    return Response({'msg':'success'},status=HTTP_200_OK)