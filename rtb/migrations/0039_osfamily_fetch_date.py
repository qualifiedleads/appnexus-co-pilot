# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-21 12:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0038_auto_20160621_1155'),
    ]

    operations = [
        migrations.AddField(
            model_name='osfamily',
            name='fetch_date',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
    ]