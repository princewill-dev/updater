from django.contrib import admin
from .models import Test

class TestAdmin(admin.ModelAdmin):
    list_display = ('text', 'ip_address', 'date')

admin.site.register(Test, TestAdmin)
