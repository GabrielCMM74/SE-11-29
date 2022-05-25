from django.shortcuts import render
# import our model class
from .models import Cat

# Add the following import
from django.http import HttpResponse


# Define the home view
def home(request):
  return HttpResponse('<h1>Hello /ᐠ｡‸｡ᐟ\ﾉ</h1>')

def about(request):
  return render(request, 'about.html')

def cats_index(request):
    cats = Cat.objects.all()
    return render(request, 'cats/index.html', {'cats': cats})

def cats_detail(request, cat_id):
    # cat_id is coming from the url definition
    # in urls.py
    # <int:cat_id>
    cat = Cat.objects.get(id=cat_id)
    print(cat)
    return render(request, 'cats/detail.html', {'cat': cat})