from django.db.models.base import Model
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.serializers import ModelSerializer
from donor.serializer import DonorSerializer
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
# Create your views here.

@api_view(["POST"])
def register_donor(request):
    data = request.data
    serializer = DonorSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'msg':'fail'},status=HTTP_400_BAD_REQUEST)
    return Response({'msg':'success'},status=HTTP_200_OK)