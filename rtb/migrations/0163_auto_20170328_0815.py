# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-03-28 08:15
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0162_rules_type_report_and_tracker'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlacementStateUnsuspend',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('spent', models.DecimalField(blank=True, decimal_places=10, max_digits=35, null=True)),
                ('conversions', models.IntegerField(null=True)),
                ('imps', models.IntegerField(null=True)),
                ('clicks', models.IntegerField(null=True)),
                ('cpa', models.DecimalField(blank=True, decimal_places=10, max_digits=35, null=True)),
                ('cpc', models.DecimalField(blank=True, decimal_places=10, max_digits=35, null=True)),
                ('cpm', models.DecimalField(blank=True, decimal_places=10, max_digits=35, null=True)),
                ('cvr', models.DecimalField(blank=True, decimal_places=10, max_digits=35, null=True)),
                ('ctr', models.FloatField(blank=True, null=True)),
                ('imps_viewed', models.IntegerField(blank=True, null=True)),
                ('view_measured_imps', models.IntegerField(blank=True, null=True)),
                ('view_measurement_rate', models.FloatField(blank=True, null=True)),
                ('view_rate', models.FloatField(blank=True, null=True)),
                ('campaign', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Campaign')),
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement')),
            ],
            options={
                'db_table': 'placement_state_unsuspend',
            },
        ),
        migrations.AlterUniqueTogether(
            name='placementstateunsuspend',
            unique_together=set([('campaign', 'placement')]),
        ),
    ]