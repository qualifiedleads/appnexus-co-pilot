# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 07:40
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('rtb', '0026_auto_20160707_0731'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clicktracker',
            old_name='advertiser_id',
            new_name='advertiser',
        ),
        migrations.RenameField(
            model_name='creative',
            old_name='advertiser_id',
            new_name='advertiser',
        ),
        migrations.RenameField(
            model_name='creative',
            old_name='profile_id',
            new_name='profile',
        ),
        migrations.RenameField(
            model_name='creative',
            old_name='publisher_id',
            new_name='publisher',
        ),
        migrations.RenameField(
            model_name='manualofferranking',
            old_name='line_item_id',
            new_name='line_item',
        ),
        migrations.RenameField(
            model_name='manualofferranking',
            old_name='managed_optimization_zone_id',
            new_name='managed_optimization_zone',
        ),
        migrations.RenameField(
            model_name='placement',
            old_name='publisher_id',
            new_name='publisher',
        ),
        migrations.RenameField(
            model_name='segment',
            old_name='advertiser_id',
            new_name='advertiser',
        ),
        migrations.RenameField(
            model_name='segment',
            old_name='parent_segment_id',
            new_name='parent_segment',
        ),
    ]