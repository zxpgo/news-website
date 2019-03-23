from django.conf.urls import url
from track.views import common, event
from track.views import event


urlpatterns = [
    url(r'^([0-9]+)/detail/$', event.detail),
    url(r'^([0-9]+)/follow/$', event.follow),
    url(r'^([0-9]+)/newdetail/$', event.newdetail),
    url(r'^([0-9]+)/unfollow/$', event.unfollow),
    url(r'^create/$', common.method_splitter, {'GET': event.get_create, 'POST': event.post_create}),
    url(r'^search/$', common.method_splitter, {'GET': event.get_search, 'POST': event.post_search}),
    url(r'^square$', event.square),
    url(r'^home$', event.home),
]