from django import forms
from track.models import Event, New


error_messages = {
    'title': {
        'required': '必须填写标题',
        'min_length': '标题长度过短（10-80个字符）',
        'max_length': '标题长度过长（10-80个字符）',
    },
    'time': {
        'required': '必须填写时间',
        'invalid': '时间格式无效',
    },
    'text': {
        'required': '必须填写正文',
        'min_length': '正文长度过短（10-10000个字符）',
        'max_length': '正文长度过长（10-10000个字符）'
    },
    'image': {
        'invalid': '图片格式无效',
    },

    'source': {
        'required': '必须填写源地址',
        'invalid': '源地址格式无效',
    },
    'event': {
        'required': '必须填写所属事件',
    },
}


class NewForm(forms.ModelForm):
    title = forms.CharField(min_length=10, max_length=80, error_messages=error_messages.get('title'))
    time = forms.DateTimeField(error_messages=error_messages.get('time'))
    text = forms.CharField(min_length=10, max_length=10000, error_messages=error_messages.get('text'))
    image = forms.ImageField(required=False, error_messages=error_messages.get('image'))
    source = forms.URLField(error_messages=error_messages.get('source'))
    event = forms.CharField(error_messages=error_messages.get('event'))

    class Meta:
        model = New
        fields = ('title', 'time', 'event', 'text', 'image', 'source')

    def clean_event(self):
        title = self.cleaned_data['event']
        event = Event.objects.get(title=title)
        return event
