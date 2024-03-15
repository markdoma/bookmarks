from django import forms

class LoginFrorm(forms.Form):
    username=forms.CharField()
    password=forms.CharField(widget=forms.PasswordInput)