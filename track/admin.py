from django.contrib import admin
from track.models import EUser, Event, New

admin.site.register(Event)
admin.site.register(EUser)
admin.site.register(New)