from django.conf.urls import url
from django.shortcuts import render
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
  path('admin/', admin.site.urls),
  url(r'^', include('user.urls')),

]