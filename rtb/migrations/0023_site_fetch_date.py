# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 06:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('rtb', '0022_auto_20160707_0644'),
    ]

    operations = [
        migrations.AddField(
            model_name='site',
            name='fetch_date',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
    ]