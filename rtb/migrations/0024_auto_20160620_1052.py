# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-20 10:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0023_auto_20160619_1133'),
    ]

    operations = [
        migrations.DeleteModel(
            name='StgSiteDomainPerformanceReport',
        ),
        migrations.RenameField(
            model_name='lineitemconversionpixel',
            old_name='pixel',
            new_name='conversion_pixel',
        ),
    ]
