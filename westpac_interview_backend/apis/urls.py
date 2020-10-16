from django.urls import path

from . import views
from .views import PostAllView

urlpatterns = [
    path('posts/', PostAllView.as_view(), name="posts"),
]