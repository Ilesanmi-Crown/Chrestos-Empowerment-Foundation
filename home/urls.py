from django import urls
from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('getinvolved/', views.getinvolved, name='getinvolved'),
  path('news/', views.news, name='news'),
]