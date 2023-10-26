from django.contrib import admin
from .models import category, appdes


class appAdmin(admin.ModelAdmin):
    prepopulated_fields={'slug':('title',)}

admin.site.register(category)
admin.site.register(appdes,appAdmin)



# Register your models here.
