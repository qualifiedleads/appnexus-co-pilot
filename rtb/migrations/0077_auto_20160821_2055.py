# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-21 20:55
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0076_networkanalyticsreport_media_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='networkcarrierreport',
            name='carrier',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='rtb.Carrier'),
        ),
        migrations.AlterField(
            model_name='geoanaliticsreport',
            name='geo_country',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Country'),
        ),
        migrations.AlterField(
            model_name='geoanaliticsreport',
            name='geo_region',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Region'),
        ),
    ]
