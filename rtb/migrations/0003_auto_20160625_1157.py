# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-25 11:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('rtb', '0002_auto_20160625_1105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='insertionorder',
            name='end_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='insertionorder',
            name='start_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
