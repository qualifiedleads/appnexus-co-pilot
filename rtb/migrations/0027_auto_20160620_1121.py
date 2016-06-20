# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-20 11:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0026_auto_20160620_1116'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='advertiser',
            name='default_brand',
        ),
        migrations.AddField(
            model_name='advertiser',
            name='default_brand_id',
            field=models.IntegerField(blank=True, db_index=True, null=True),
        ),
    ]
