# Generated by Django 4.2.6 on 2023-10-25 23:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pittappsapi', '0006_alter_appdes_appimageurl'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appdes',
            name='appdescriptionextra',
        ),
        migrations.RemoveField(
            model_name='appdes',
            name='appimage',
        ),
    ]
