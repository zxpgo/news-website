from django.conf.urls import url
from track.views import common, user

urlpatterns = [
    url(r'^login', common.method_splitter, {'GET': user.get_login, 'POST': user.post_login}),
    url(r'^logout$', user.get_logout),
    url(r'^register$', common.method_splitter, {'GET': user.get_register, 'POST': user.post_register}),
    url(r'^modify$', common.method_splitter, {'GET': user.get_modify, 'POST': user.post_modify}),
    url(r'^([0-9]+)/detail/$', user.detail),
    url(r'^([0-9]+)/star$', user.star),
    url(r'^([0-9]+)/unstar$', user.unstar),
]