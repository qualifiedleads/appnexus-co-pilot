# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-21 14:47
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0084_mlplacementsclusterskmeans_distancetoclusters'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mlplacementsclusterskmeans',
            old_name='distanceToClusters',
            new_name='distance_to_clusters',
        ),
    ]
