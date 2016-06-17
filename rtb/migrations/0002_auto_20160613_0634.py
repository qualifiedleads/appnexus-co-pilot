# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-13 06:34
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rtb', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField()),
                ('username', models.CharField(max_length=80)),
                ('email', models.CharField(max_length=80)),
                ('first_name', models.CharField(max_length=80)),
                ('last_name', models.CharField(max_length=80)),
                ('password', models.CharField(max_length=200)),
                ('date_added', models.DateTimeField(default=datetime.datetime.now)),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.CreateModel(
            name='UserType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=80)),
            ],
            options={
                'db_table': 'user_type',
            },
        ),
        migrations.AlterModelTable(
            name='networkanalyticsraw',
            table='network_analytics_raw',
        ),
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rtb.UserType'),
        ),
    ]