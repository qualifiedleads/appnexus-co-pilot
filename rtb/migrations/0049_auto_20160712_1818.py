# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-12 18:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0048_auto_20160712_1700'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='urls',
            field=models.BinaryField(null=True),
        ),
    ]
