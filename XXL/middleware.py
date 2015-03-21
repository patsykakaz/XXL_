#-*- coding: utf-8 -*-
from __future__ import unicode_literals

class PubMiddleware(object):
    def process_template_response(self, request, response):
        pubTag = "on"
        response.context_data['pubTag'] = pubTag
        print(response.context_data)
        return response


# from models import Book

# class GetAllBooks(object):
#     def process_request(self, request):
#         books = Book.objects.all()
#         request.session['app_books'] = books