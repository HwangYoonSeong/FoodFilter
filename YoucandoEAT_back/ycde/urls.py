"""database URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('userInput', views.post_user, name='post_user'),
    path('postInput', views.post_post, name='post_post'),
    path('commentInput', views.post_comment, name='post_comment'),
    path('postList', views.get_postlist, name='get_postlist'),
    path('postDetail', views.get_post, name='get_post'),
    path('ingredientList', views.get_ingredientlist, name='get_ingredientlist'),
    path('filterBit', views.post_filterBit, name='post_filterBit'),
    path('filterBit', views.post_filterBit, name='post_filterBit'),
    path('foodSearch', views.get_foodSearch, name='get_foodSearch'),
    path('postSearch', views.get_postSearch, name='get_postSearch'),
    path('translate', views.get_translate, name='get_translate'),
]
