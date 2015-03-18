#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.template import Context

class PubMiddleware(object):
    def process_template_response(self, request, response):
        """ OBJECTIF : verifier la présence de pub et 
        ajouter au context les éléments """
        return response

