from django.contrib import admin

# Register your models here.
from .models import Cat
# whatever models we have ^ we'll import

admin.site.register(Cat)