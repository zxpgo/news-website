from track.models import Event, New, Map
from django.template import RequestContext
from django.shortcuts import render_to_response, get_object_or_404, redirect
from django.http import Http404
from datetime import datetime
from track.forms.event import NewForm
from django.contrib.auth.decorators import login_required


@login_required
def get_search(request):
    return render_to_response('event/search.html', context_instance=RequestContext(request))


@login_required
def post_search(request):
    print(New.objects.get(title__contains=request.POST['text']))
    return render_to_response('event/search.html', context_instance=RequestContext(request))


@login_required
def newdetail(request, id):
    new = get_object_or_404(New, id=id)
    if new.is_audited == 0:
        raise Http404
    else:
        return render_to_response('event/newdetail.html', locals(), context_instance=RequestContext(request))


@login_required
def detail(request, id):
    event = get_object_or_404(Event, id=id)
    is_followed = 1
    try:
        Map.objects.get(event_id=event.id, user_id=request.user.id)
    except Map.DoesNotExist:
        is_followed = 0
    return render_to_response('event/detail.html', locals(), context_instance=RequestContext(request))


@login_required
def follow(request, id):
    event = get_object_or_404(Event, id=id)
    if request.user.username:
        try:
            Map.objects.get(user_id=request.user.id, event_id=event.id)
        except Map.DoesNotExist:
            umape = Map(user_id=request.user.id, event_id=event.id, time=datetime.now())
            umape.save()
            event.followed += 1
            event.save()
        return redirect('/events/%d/detail' % event.id)
    else:
        raise Http404


@login_required
def unfollow(request, id):
    event = get_object_or_404(Event, id=id)
    if request.user.username:
        try:
            umape = Map.objects.get(user_id=request.user.id, event_id=event.id)
        except Map.DoesNotExist:
            raise Http404
        else:
            umape.delete()
            event.followed -= 1
            event.save()
        return redirect('/events/%d/detail' % event.id)
    else:
        raise Http404


@login_required
def get_create(request, **kwargs):
    event_list = Event.objects.all()
    return render_to_response('event/create.html', locals(), context_instance=RequestContext(request))


@login_required
def post_create(request):
    form = NewForm(request.POST)
    if not form.is_valid():
        return get_create(request, errors=form.errors)
    new = form.save()
    new.user = request.user
    event = form.cleaned_data.get('event')
    new.save()
    return redirect('/events/%d/detail' % event.id)


def square(request):
    event = Event.objects.all()
    return render_to_response('event/square.html', locals(), context_instance=RequestContext(request))


@login_required
def home(request):
    maps = Map.objects.filter(user_id=request.user.id)
    event = []
    for mapp in maps:
        a = Event.objects.get(id=mapp.event_id)
        event.append(a)
    return render_to_response('event/home.html', locals(), context_instance=RequestContext(request))

