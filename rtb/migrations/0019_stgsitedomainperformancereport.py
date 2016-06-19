# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-17 07:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0018_auto_20160616_2021'),
    ]

    operations = [
        migrations.CreateModel(
            name='StgSiteDomainPerformanceReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.DateTimeField(blank=True, db_index=True, null=True)),
                ('site_domain', models.TextField(blank=True, db_index=True, null=True)),
                ('campaign', models.IntegerField(blank=True, db_index=True, null=True)),
                ('line_item_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('top_level_category_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('second_level_category_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('deal_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('advertiser_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('buyer_member_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('operating_system_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('supply_type', models.TextField(blank=True, choices=[(b'web', b'web'), (b'mobile_app', b'mobile_app'), (b'mobile_web', b'mobile_web')], null=True)),
                ('mobile_application_id', models.TextField(blank=True, db_index=True, null=True)),
                ('mobile_application_name', models.TextField(blank=True, db_index=True, null=True)),
                ('mobile_application', models.TextField(blank=True, db_index=True, null=True)),
                ('fold_position', models.TextField(blank=True, choices=[(b'0', b'unknown'), (b'1', b'above'), (b'2', b'below'), (b'11', b'Top FB Ad Slot'), (b'12', b'2nd FB Ad Slot'), (b'13', b'3nd FB Ad Slot'), (b'14', b'4nd FB Ad Slot'), (b'15', b'5nd FB Ad Slot'), (b'16', b'6nd FB Ad Slot'), (b'17', b'7nd FB Ad Slot'), (b'18', b'8nd FB Ad Slot'), (b'19', b'9nd FB Ad Slot'), (b'20', b'10nd FB Ad Slot')], null=True)),
                ('age_bucket', models.TextField(blank=True, choices=[(b'0', b'unknown'), (b'1', b'13-17'), (b'2', b'18-24'), (b'3', b'25-34'), (b'4', b'35-44'), (b'5', b'45-54'), (b'6', b'55-64'), (b'7', b'65+')], null=True)),
                ('gender', models.TextField(blank=True, choices=[(b'm', b'm'), (b'f', b'f'), (b'u', b'u')], null=True)),
                ('is_remarketing', models.IntegerField(blank=True, null=True)),
                ('conversion_pixel_id', models.IntegerField(blank=True, db_index=True, null=True)),
                ('booked_revenue', models.DecimalField(decimal_places=10, max_digits=35)),
                ('clicks', models.IntegerField(blank=True, null=True)),
                ('click_thru_pct', models.FloatField(blank=True, null=True)),
                ('convs_per_mm', models.FloatField(blank=True, null=True)),
                ('convs_rate', models.FloatField(blank=True, null=True)),
                ('cost_ecpa', models.DecimalField(decimal_places=10, max_digits=35)),
                ('cost_ecpc', models.DecimalField(decimal_places=10, max_digits=35)),
                ('cpm', models.DecimalField(decimal_places=10, max_digits=35)),
                ('ctr', models.FloatField(blank=True, null=True)),
                ('imps', models.IntegerField(blank=True, null=True)),
                ('media_cost', models.DecimalField(decimal_places=10, max_digits=35)),
                ('post_click_convs', models.IntegerField(blank=True, null=True)),
                ('post_click_convs_rate', models.FloatField(blank=True, null=True)),
                ('post_view_convs', models.IntegerField(blank=True, null=True)),
                ('post_view_convs_rate', models.FloatField(blank=True, null=True)),
                ('profit', models.DecimalField(decimal_places=10, max_digits=35)),
                ('profit_ecpm', models.DecimalField(decimal_places=10, max_digits=35)),
                ('imps_viewed', models.IntegerField(blank=True, null=True)),
                ('view_measured_imps', models.IntegerField(blank=True, null=True)),
                ('view_rate', models.FloatField(blank=True, null=True)),
                ('view_measurement_rate', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'stg_site_domain_performance_report',
            },
        ),
    ]