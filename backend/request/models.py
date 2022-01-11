from django.db import models
from recipient.models import Recipient
# Create your models here.

class Request(models.Model):
    email = models.ForeignKey(Recipient,on_delete=models.CASCADE)
    blood_group = models.CharField(max_length=5)
    city = models.CharField(max_length=20)
    request_initiate = models.BooleanField(default=False)
    request_pending = models.BooleanField(default=False)
    request_end = models.BooleanField(default=False)

    def __str__(self):
        return str(self.email)