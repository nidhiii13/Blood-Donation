from .models import Request
from donor.models import Donor
def search_donor(email,bloodgrp,city):
    donor = Donor.objects.filter(blood_group=bloodgrp,city=city)
    if len(donor)>0:
        req = Request.objects.get(email=email)
        req.request_pending=True
        req.save()
        
    