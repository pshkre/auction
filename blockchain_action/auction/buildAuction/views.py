from django.shortcuts import render

def create_contract(request):
    #create = {'name':'參與拍賣!',}
    return render(request, 'buildAuction/create_contract.html')
