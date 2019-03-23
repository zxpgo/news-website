from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^users/', include('track.urls.user')),
    url(r'^events/', include('track.urls.event'))
]
