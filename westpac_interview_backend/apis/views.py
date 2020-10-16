from django.http import HttpResponse
import requests
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

def build_url(request, record):
    url = "https://jsonplaceholder.typicode.com"
    url_list = request.build_absolute_uri().strip('/').split('/')

    if url_list [len(url_list) - 1].isdigit() != True:
        url = url + '/' + record + '/'
    else:
        url = url + "/" + record + '/' + url_list [len(url_list) - 1] + '/'
    return url

class PostAllView(GenericAPIView):
        
    def get(self, request):
        try:
            url = build_url(request, "posts")
            payload  = {}
            headers = {
            }
            response = requests.request("GET", url, headers=headers, data = payload)
            return Response(response.json())  
        except Exception as e:
            raise e