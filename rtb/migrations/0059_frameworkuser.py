# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-18 17:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0058_auto_20160716_1513'),
    ]

    operations = [
        migrations.CreateModel(
            name='FrameworkUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.TextField(blank=True, db_index=True, null=True)),
                ('password', models.TextField(blank=True, null=True)),
                ('email', models.TextField(blank=True, db_index=True, null=True)),
                ('first_name', models.TextField(blank=True, null=True)),
                ('last_name', models.TextField(blank=True, null=True)),
                ('permission', models.TextField(blank=True, db_index=True, null=True)),
                ('apnexusname', models.TextField(blank=True, db_index=True, null=True)),
                ('apnexus_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='rtb.User')),
            ],
            options={
                'db_table': 'framework_user',
            },
        ),
    ]
