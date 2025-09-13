from django.shortcuts import render

# Create your views here.

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
