# Generated by Django 4.2.4 on 2023-08-24 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0002_globalsettings_sitebox_globalsettings_brochure_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navigation',
            name='page_type',
            field=models.CharField(blank=True, choices=[('Home', 'Home'), ('Home/About_1', 'Home/About_1'), ('Slider', 'Slider'), ('Home/About', 'Home/About')], max_length=50, null=True),
        ),
    ]
