from django.shortcuts import render
from django.http import HttpResponseRedirect
# Create your views here.
def index(request):
    return render(request, 'build/index.html')
def handleForm(request):
    name = request.POST.get('name', '')
    message = request.POST.get('message', '')
    from_email = request.POST.get('mail', '')
    return render(request,'thanks.html')