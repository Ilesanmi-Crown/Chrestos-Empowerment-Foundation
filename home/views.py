from django.shortcuts import render
from django.views.decorators.cache import cache_page

@cache_page(60 * 5) 
def home(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def getinvolved(request):
    return render(request, 'get-involved.html')


def whatwedo(request):
    return render(request, 'what-we-do.html')


def news(request):
    return render(request, 'news.html')
