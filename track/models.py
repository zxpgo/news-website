from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class EUser(AbstractUser):
    nickname = models.CharField(max_length=200, null=True, blank=True)
    birth = models.DateField(null=True, blank=True)
    sex = models.CharField(default='保密', max_length=4)
    fans = models.IntegerField(default=0)

    def __str__(self):
        return self.username


class Event(models.Model):
    title = models.CharField(max_length=80)
    summary = models.CharField(max_length=300)
    cover = models.ImageField(null=True, blank=True, upload_to=settings.MEDIA_ROOT)
    followed = models.IntegerField(default=0)
    starttime = models.DateField()
    endtime = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title


class New(models.Model):
    title = models.CharField(max_length=80)
    time = models.DateTimeField()
    text = models.TextField(max_length=10000)
    image = models.ImageField(null=True, blank=True, upload_to=settings.MEDIA_ROOT)
    source = models.URLField()
    user = models.ForeignKey(EUser, null=True, blank=True)
    event = models.ForeignKey(Event,)
    is_audited = models.BooleanField(default=0)

    def __str__(self):
        return self.title


class Map(models.Model):
    user_id = models.IntegerField()
    event_id = models.IntegerField()
    time = models.DateTimeField()


class MapUser(models.Model):
    Auser_id = models.IntegerField()
    Buser_id = models.IntegerField()
    time = models.DateTimeField()