# Generated by Django 4.0.1 on 2022-01-07 12:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipient', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Donor',
            new_name='Recipient',
        ),
    ]
