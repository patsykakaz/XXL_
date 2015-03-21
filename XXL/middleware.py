#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.template import Template, RequestContext
from mezzanine.utils.device import templates_for_device

class PubMiddleware(object):
    def process_template_response(self, request, response):
        xxx = "test"
        response.context_data['xxx'] = xxx
        print(response.context_data)
        return response


# from models import Book

# class GetAllBooks(object):
#     def process_request(self, request):
#         books = Book.objects.all()
#         request.session['app_books'] = books