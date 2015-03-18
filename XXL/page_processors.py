#-*- coding: utf-8 -*-

from django import forms
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from mezzanine.pages.page_processors import processor_for
from mezzanine.core.models import Displayable, Ownable, RichText, Slugged


@processor_for('blog')
def processor_univers(request, page):
    print('ok for page_processors')
    test_pub = 'it fuckn wurks'
    return locals()

