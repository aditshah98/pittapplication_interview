# Generated by Django 4.2.6 on 2023-10-25 16:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pittappsapi', '0003_alter_appdes_appimage_alter_appdes_appimageurl_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appdes',
            old_name='name',
            new_name='title',
        ),
    ]
