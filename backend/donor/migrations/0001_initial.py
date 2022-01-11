# Generated by Django 4.0.1 on 2022-01-07 09:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Donor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('dob', models.DateField()),
                ('phone_no', models.CharField(max_length=10, validators=[django.core.validators.RegexValidator(message=' 10 digits allowed.', regex='^[6-9]\\d{9}$')])),
                ('blood_group', models.CharField(max_length=5)),
                ('state', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=50)),
            ],
        ),
    ]
