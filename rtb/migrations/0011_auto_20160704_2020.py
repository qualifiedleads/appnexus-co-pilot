# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-04 20:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0010_adprofile_fetch_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='ManualOfferRanking',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('country_code', models.TextField(blank=True, db_index=True, null=True)),
                ('creative_height', models.IntegerField(blank=True, null=True)),
                ('creative_width', models.IntegerField(blank=True, null=True)),
                ('line_item_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.LineItem')),
            ],
            options={
                'db_table': 'manual_offer_ranking',
            },
        ),
        migrations.CreateModel(
            name='MobileAppInstance',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('store_name', models.TextField(blank=True, null=True)),
                ('store_url', models.TextField(blank=True, null=True)),
                ('mobile_app_store', models.TextField(blank=True, null=True)),
                ('last_modified', models.DateTimeField(blank=True, null=True)),
                ('created_on', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'mobile_app_instance',
            },
        ),
        migrations.CreateModel(
            name='MobileAppInstanceBundle',
            fields=[
                ('bundle_id', models.IntegerField(primary_key=True, serialize=False)),
                ('last_modified', models.DateTimeField(blank=True, null=True)),
                ('created_on', models.DateTimeField(blank=True, null=True)),
                ('os_family', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.OSFamily')),
            ],
            options={
                'db_table': 'mobile_app_instance_bundle',
            },
        ),
        migrations.CreateModel(
            name='MobileAppStore',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.TextField(blank=True, db_index=True, null=True)),
                ('url', models.TextField(blank=True, null=True)),
                ('last_modified', models.DateTimeField(blank=True, null=True)),
                ('os_family', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.OSFamily')),
            ],
            options={
                'db_table': 'mobile_app_store',
            },
        ),
        migrations.CreateModel(
            name='OptimizationZone',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.TextField(blank=True, db_index=True, null=True)),
                ('external_name', models.TextField(blank=True, db_index=True, null=True)),
                ('last_modified', models.DateTimeField(blank=True, null=True)),
                ('type', models.TextField(blank=True, choices=[(b'managed', b'managed'), (b'rtb', b'rtb')], null=True)),
                ('search', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'optimization_zone',
            },
        ),
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('code', models.TextField(blank=True, db_index=True, null=True)),
                ('name', models.TextField(blank=True, db_index=True, null=True)),
                ('state', models.TextField(blank=True, choices=[(b'active', b'Active'), (b'inactive', b'Inactive')], null=True)),
                ('url', models.TextField(blank=True, null=True)),
                ('last_modified', models.DateTimeField(blank=True, null=True)),
                ('intended_audience', models.TextField(blank=True, choices=[(b'general', b'general'), (b'children', b'children'), (b'young_adult', b'young_adult'), (b'mature', b'mature')], null=True)),
                ('audited', models.NullBooleanField()),
                ('publisher_join', models.TextField(blank=True, null=True)),
                ('supply_type', models.TextField(blank=True, choices=[(b'web', b'web'), (b'mobile_app', b'mobile_app'), (b'mobile_web', b'mobile_web'), (b'facebook_sidebar', b'facebook_sidebar')], null=True)),
                ('creative_format_action', models.NullBooleanField()),
                ('creative_formats', models.TextField(blank=True, null=True)),
                ('allowed_click_actions', models.TextField(blank=True, null=True)),
                ('marketplace_map', models.TextField(blank=True, null=True)),
                ('managed_optimization_zone_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='managed_optimization_zone_id', to='rtb.OptimizationZone')),
                ('mobile_app_instance_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.MobileAppInstance')),
                ('primary_content_category_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.ContentCategory')),
                ('publisherd', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.Publisher')),
                ('rtb_optimization_zone_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='rtb_optimization_zone_id', to='rtb.OptimizationZone')),
            ],
            options={
                'db_table': 'site',
            },
        ),
        migrations.CreateModel(
            name='SiteContentCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.ContentCategory')),
                ('site', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.Site')),
            ],
            options={
                'db_table': 'site_content_category',
            },
        ),
        migrations.CreateModel(
            name='SiteInventoryAttributes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inventory_attribute', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.InventoryAttribute')),
                ('site', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.Site')),
            ],
            options={
                'db_table': 'site_inventory_attributes',
            },
        ),
        migrations.RemoveField(
            model_name='placement',
            name='site_id',
        ),
        migrations.AlterField(
            model_name='sitedomainperformancereport',
            name='supply_type',
            field=models.TextField(blank=True, choices=[(b'web', b'web'), (b'mobile_app', b'mobile_app'), (b'mobile_web', b'mobile_web'), (b'facebook_sidebar', b'facebook_sidebar')], null=True),
        ),
        migrations.AddField(
            model_name='manualofferranking',
            name='managed_optimization_zone_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.OptimizationZone'),
        ),
        migrations.AddField(
            model_name='placement',
            name='site',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rtb.Site'),
        ),
    ]