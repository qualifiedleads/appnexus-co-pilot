# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-13 07:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0003_auto_20160613_0635'),
    ]

    operations = [
        migrations.CreateModel(
            name='Advertiser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=80)),
                ('name', models.CharField(max_length=80)),
                ('state', models.CharField(choices=[(b'ACTIVE', b'Active'), (b'INACTIVE', b'Inactive')], default=b'ACTIVE', max_length=80)),
                ('default_brand_id', models.IntegerField()),
                ('remarketing_segment_id', models.IntegerField()),
                ('lifetime_budget', models.FloatField()),
                ('lifetime_budget_imps', models.IntegerField()),
                ('daily_budget', models.FloatField()),
                ('daily_budget_imps', models.IntegerField()),
                ('enable_pacing', models.BooleanField()),
                ('allow_safety_pacing', models.BooleanField()),
                ('profile_id', models.IntegerField()),
                ('control_pct', models.FloatField()),
                ('timezone', models.CharField(max_length=80)),
                ('last_modified', models.DateTimeField()),
                ('billing_name', models.CharField(max_length=200)),
                ('billing_phone', models.CharField(max_length=200)),
                ('billing_address1', models.CharField(max_length=200)),
                ('billing_address2', models.CharField(max_length=200)),
                ('billing_city', models.CharField(max_length=200)),
                ('billing_state', models.CharField(max_length=200)),
                ('billing_country', models.CharField(max_length=200)),
                ('billing_zip', models.CharField(max_length=200)),
                ('default_currency', models.CharField(max_length=200)),
                ('default_category', models.CharField(max_length=200)),
                ('use_insertion_orders', models.BooleanField()),
                ('time_format', models.CharField(choices=[(b'12', b'12-Hour'), (b'24', b'24-Hour')], default=b'12', max_length=80)),
            ],
        ),
        migrations.CreateModel(
            name='AdvertiserBrand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Advertiser')),
            ],
        ),
        migrations.CreateModel(
            name='AdvertiserCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Advertiser')),
            ],
        ),
        migrations.CreateModel(
            name='AdvertiserLabel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('value', models.CharField(max_length=200)),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Advertiser')),
            ],
        ),
        migrations.CreateModel(
            name='AdvertiserThirdpartyPixel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Advertiser')),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('urls', models.CharField(max_length=80)),
                ('is_premium', models.BooleanField()),
                ('company_id', models.IntegerField()),
                ('num_creatives', models.IntegerField()),
                ('last_modified', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='BrandInCountry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Brand')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('is_sensitive', models.BooleanField()),
                ('requires_whitelist', models.BooleanField()),
                ('requires_whitelist_on_external', models.BooleanField()),
                ('last_modified', models.DateTimeField()),
                ('is_brand_eligible', models.BooleanField()),
            ],
            options={
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('code', models.CharField(max_length=80)),
            ],
        ),
        migrations.CreateModel(
            name='NetworkAnalyticsReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hour', models.DateTimeField()),
                ('entity_member_id', models.IntegerField()),
                ('buyer_member_id', models.IntegerField()),
                ('seller_member_id', models.IntegerField()),
                ('advertiser_id', models.IntegerField()),
                ('adjustment_id', models.IntegerField()),
                ('publisher_id', models.IntegerField()),
                ('pub_rule_id', models.IntegerField()),
                ('site_id', models.IntegerField()),
                ('pixel_id', models.IntegerField()),
                ('placement_id', models.IntegerField()),
                ('insertion_order_id', models.IntegerField()),
                ('line_item_id', models.IntegerField()),
                ('campaign_id', models.IntegerField()),
                ('creative_id', models.IntegerField()),
                ('size', models.CharField(max_length=200)),
                ('brand_id', models.IntegerField()),
                ('billing_period_start_date', models.DateTimeField()),
                ('billing_period_end_date', models.DateTimeField()),
                ('geo_country', models.CharField(max_length=200)),
                ('inventory_class', models.CharField(max_length=200)),
                ('bid_type', models.CharField(max_length=200)),
                ('imp_type_id', models.IntegerField()),
                ('buyer_type', models.CharField(max_length=200)),
                ('seller_type', models.CharField(max_length=200)),
                ('revenue_type_id', models.IntegerField()),
                ('supply_type', models.CharField(max_length=200)),
                ('payment_type', models.CharField(max_length=200)),
                ('deal_id', models.IntegerField()),
                ('media_type_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ThirdPartyPixel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField()),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='brandincountry',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Category'),
        ),
        migrations.AddField(
            model_name='brand',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Category'),
        ),
        migrations.AddField(
            model_name='advertisercategory',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Category'),
        ),
        migrations.AddField(
            model_name='advertiserbrand',
            name='brand',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.Brand'),
        ),
    ]