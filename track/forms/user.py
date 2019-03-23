from django import forms
from django.contrib.auth import authenticate
from track.models import EUser

error_messages = {
    'username': {
        'required': '必须填写用户名',
        'min_length': '用户名长度过短（3-12个字符）',
        'max_length': '用户名长度过长（3-12个字符）',
        'invalid': '用户名格式错误（英文字母开头，数字，下划线构成）'
    },
    'email': {
        'required': '必须填写E-mail',
        'min_length': 'Email长度有误',
        'max_length': 'Email长度有误',
        'invalid': 'Email地址无效'
    },
    'password': {
        'required': '必须填写密码',
        'min_length': '密码长度过短（6-64个字符）',
        'max_length': '密码长度过长（6-64个字符）'
    },
    'firstname': {
        'max_length': '名字长度过长（1-20个字符）'
    },
    'lastname': {
        'max_length': '姓氏长度过长（1-20个字符）'
    },
    'nickname': {
        'max_length': '昵称长度过长（1-20个字符）'
    },
    'birth': {
        'invalid': '日期格式错误（20XX/XX/XX）'
    }
}


class ModifyForm(forms.Form):
    firstname = forms.CharField(max_length=20, required=False, error_messages=error_messages.get('firstname'))
    lastname = forms.CharField(max_length=20, required=False, error_messages=error_messages.get('lastname'))
    email = forms.EmailField(required=False, error_messages=error_messages.get('email'))
    nickname = forms.CharField(max_length=20, required=False, error_messages=error_messages.get('nickname'))
    birth = forms.DateField(required=False, error_messages=error_messages.get('birth'))
    sex = forms.CharField(max_length=4)

    class Meta:
        model = EUser
        fields = ('firstname', 'lastname', 'email', 'nickname', 'birth', 'sex')


class LoginForm(forms.Form):
    username = forms.RegexField(min_length=3, max_length=12, regex=r'^[a-zA-Z][a-zA-Z0-9_]*$',
                                error_messages=error_messages.get('username'))
    password = forms.CharField(min_length=6, max_length=64, error_messages=error_messages.get('password'))

    def __init__(self, *args):
        self.user_cache = None
        super(LoginForm, self).__init__(*args)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            self.user_cache = authenticate(username=username, password=password)
            if self.user_cache is None:
                LoginForm.add_error(self,'username','账号或者密码不正确')
                raise forms.ValidationError('账号或者密码不正确')
            elif not self.user_cache.is_active:
                LoginForm.add_error(self, 'username', '用户已被锁定，请联系管理员解锁')
                raise forms.ValidationError('用户已被锁定，请联系管理员解锁')
        return self.cleaned_data

    def get_user(self):
        return self.user_cache


class RegisterForm(forms.ModelForm):
    username = forms.RegexField(min_length=3, max_length=12, regex=r'^[a-zA-Z][a-zA-Z0-9_]*$',
                                error_messages=error_messages.get('username'))
    email = forms.EmailField(min_length=4, max_length=64, error_messages=error_messages.get('email'))
    password = forms.CharField(min_length=6, max_length=64, error_messages=error_messages.get('password'))
    password_confirm = forms.CharField(required=False)

    class Meta:
        model = EUser
        fields = ('username', 'email', 'password')

    def clean_username(self):
        username = self.cleaned_data['username']
        try:
            EUser.objects.get(username=username)
            raise forms.ValidationError('所填用户名已经被注册过')
        except EUser.DoesNotExist:
            return username

    def clean_email(self):
        email = self.cleaned_data['email']
        try:
            EUser.objects.get(email=email)
            raise forms.ValidationError('所填邮箱已经被注册过')
        except EUser.DoesNotExist:
            return email

    def clean_password_confirm(self):
        password1 = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get('password_confirm')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError(u'两次输入密码不一致')
        return password2
