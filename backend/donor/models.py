from django.db import models
from django.core.validators import RegexValidator
# Create your models here.

class Donor(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    dob = models.DateField()
    phone_regex = RegexValidator(regex=r'^[6-9]\d{9}$', message=" 10 digits allowed.")
    phone_no = models.CharField(validators=[phone_regex],max_length=10)
    blood_group = models.CharField(max_length=5)
    state = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    address = models.CharField(max_length=50)

    def __str__(self):
        return str(self.email)

