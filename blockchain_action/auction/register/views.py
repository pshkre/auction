from django.shortcuts import render

def register(request):
    #create = {'name':'參與拍賣!',}
    return render(request, 'register/register.html')

