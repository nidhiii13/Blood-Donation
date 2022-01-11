from django.shortcuts import render
from request.models import Request
from .search import search_donor
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET'])
def process_request(request):   
    requests = Request.objects.filter(request_pending=False)
    for req in requests:
        print(req.request_initiate)
        search_donor(req.email,req.blood_group,req.city)

    return Response({'msg':'success'})