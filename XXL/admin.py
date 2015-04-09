#-*- coding: utf-8 -*-

from copy import deepcopy
from django.contrib import admin
from mezzanine.pages.admin import PageAdmin
from mezzanine.pages.models import RichTextPage
from .models import *
from mezzanine.blog.admin import BlogPostAdmin
from mezzanine.blog.models import BlogPost

publicite_extra_fieldsets = (
                (None,
                        {'fields': ('lien','media','formatPub')
                        }
                ),
        )

class PubliciteAdmin(PageAdmin):
    fieldsets = deepcopy(PageAdmin.fieldsets) + publicite_extra_fieldsets

blog_fieldsets = deepcopy(BlogPostAdmin.fieldsets)
blog_fieldsets[0][1]["fields"].insert(-2, "agence")
blog_fieldsets[0][1]["fields"].insert(-2, "annonceur")
blog_fieldsets[0][1]["fields"].insert(-2, "societe")

class MyBlogPostAdmin(BlogPostAdmin):
    fieldsets = blog_fieldsets


admin.site.register(Publicite, PubliciteAdmin)
admin.site.unregister(BlogPost)
admin.site.register(BlogPost, MyBlogPostAdmin)

