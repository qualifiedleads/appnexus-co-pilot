# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-02-23 14:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0143_auto_20170219_2331'),
    ]

    operations = [
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataAll',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_all',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataCurMonth',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_cur_month',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataLast14Days',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_last_14_days',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataLast21Days',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_last_21_days',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataLast3Days',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_last_3_days',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataLast7Days',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_last_7_days',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataLast90Days',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_last_90_days',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataLastMonth',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_last_month',
            },
        ),
        migrations.CreateModel(
            name='UIUsualPlacementsGridDataYesterday',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('evaluation_date', models.DateTimeField(db_index=True)),
                ('window_start_date', models.DateTimeField(db_index=True)),
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
                ('placement', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='rtb.Placement', unique=True)),
            ],
            options={
                'db_table': 'ui_usual_placements_grid_data_yesterday',
            },
        ),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_yesterday ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_yesterday ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_3_days ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_3_days ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_7_days ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_7_days ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_14_days ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_14_days ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_21_days ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_21_days ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_cur_month ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_cur_month ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_month ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_month ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_90_days ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),
        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_last_90_days ALTER COLUMN window_start_date TYPE timestamp without time zone;'),

        migrations.RunSQL(
            'ALTER TABLE ui_usual_placements_grid_data_all ALTER COLUMN evaluation_date TYPE timestamp without time zone;'),

    ]
