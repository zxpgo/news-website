from django.shortcuts import redirect, render_to_response, get_object_or_404
from track.forms.user import LoginForm, RegisterForm, ModifyForm
from django.contrib import auth
from django.template import RequestContext
from django.conf import settings
from django.contrib.auth.decorators import login_required
from track.models import EUser, MapUser
from django.http import Http404
from datetime import datetime


@login_required
def unstar(request, id):
    user = get_object_or_404(EUser, id=id)
    if request.user.username:
        try:
            mapu = MapUser.objects.get(Auser_id=request.user.id, Buser_id=id)
        except MapUser.DoesNotExist:
            raise Http404
        else:
            mapu.delete()
            user.fans -= 1
            user.save()
        return redirect('/users/%d/detail' % user.id)
    else:
        raise Http404


@login_required
def star(request, id):
    user = get_object_or_404(EUser, id=id)
    if request.user.username:
        try:
            MapUser.objects.get(Auser_id=request.user.id, Buser_id=id)
        except MapUser.DoesNotExist:
            mapu = MapUser(Auser_id=request.user.id, Buser_id=id, time=datetime.now())
            mapu.save()
            user.fans += 1
            user.save()
        return redirect('/users/%d/detail' % user.id)
    else:
        raise Http404


@login_required
def detail(request, id):
    user = get_object_or_404(EUser, id=id)
    is_followed = 1
    try:
        MapUser.objects.get(Auser_id=request.user.id, Buser_id=id)
    except MapUser.DoesNotExist:
        is_followed = 0
    if user.first_name is '':
        user.first_name = '保密'
    if user.last_name is '':
        user.last_name = '保密'
    if user.birth is None:
        user.birth = '保密'
    if user.nickname is None:
        user.nickname = '保密'
    if user.id != request.user.id:
        self = 0
    else:
        self = 1
    return render_to_response('user/detail.html', locals(), context_instance=RequestContext(request))


def get_logout(request):
    auth.logout(request)
    return redirect('/users/login')


def get_login(request, **kwargs):
    auth.logout(request)
    return render_to_response('user/login.html', kwargs, context_instance=RequestContext(request))


def post_login(request):
    form = LoginForm(request.POST)
    if not form.is_valid():
        return get_login(request, errors=form.errors)

    user = form.get_user()
    auth.login(request, user)

    return redirect('/users/%d/detail' % user.id)


def get_register(request, **kwargs):
    auth.logout(request)
    return render_to_response('user/register.html', kwargs, context_instance=RequestContext(request))


def post_register(request):
    form = RegisterForm(request.POST)

    if not form.is_valid():
        return get_register(request, errors=form.errors)

    user = form.save()
    user.set_password(form.cleaned_data.get('password'))
    user.save()
    return redirect(settings.LOGIN_URL)


@login_required
def get_modify(request, **kwargs):
    return render_to_response('user/modify.html', kwargs, context_instance=RequestContext(request))


@login_required
def post_modify(request):
    form = ModifyForm(request.POST)

    if not form.is_valid():
        return get_modify(request, errors=form.errors)

    user = request.user
    user.first_name = form.cleaned_data.get('firstname')
    user.last_name = form.cleaned_data.get('lastname')
    user.nickname = form.cleaned_data.get('nickname')
    user.email = form.cleaned_data.get('email')
    user.sex = form.cleaned_data.get('sex')
    user.birth = form.cleaned_data.get('birth')
    user.save()
    return redirect('/users/%d/detail' % request.user.id)