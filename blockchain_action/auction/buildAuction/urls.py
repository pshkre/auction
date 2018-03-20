# -*- coding: utf-8 -*-
from django.conf.urls import url
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', views.create_contract , name='create_contract'),
     url(r'^test.html', TemplateView.as_view(template_name="buildAuction/test.html")),
]
