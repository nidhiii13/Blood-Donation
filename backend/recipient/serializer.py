from django.db.models import fields
from rest_framework import serializers

from recipient.models import Recipient

class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipient
        fields = '__all__'