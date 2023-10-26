from django.shortcuts import render
from .models import category,appdes 
from .serializers import categorySerializer, appdesSerializer
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response

# Create your views here.

class appApiView(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.RetrieveModelMixin):
    queryset=appdes.objects.all()
    serializer_class = appdesSerializer
    lookup_field= 'slug' #COME BACK AND RE-CHECK

class categoryApiView(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.RetrieveModelMixin):
    queryset=category.objects.all()
    serializer_class = categorySerializer
    lookup_field= 'id' #COME BACK AND RE-CHECK

class categoryAppApiView(viewsets.ViewSet):
    def retrieve(self, request,pk=None):
        queryset=appdes.objects.filter(appcat=pk)
        serializer = appdesSerializer(queryset, many=True)
        return Response(serializer.data)

class editorChoiceAppsApiView(viewsets.ViewSet):
    def list(self, request,pk=None):
        queryset = appdes.objects.filter(appeditorchoice__iexact='EDITORSCHOICE')
        
        # .order_by('-id')[0:4]
        serializer = appdesSerializer(queryset, many=True)
        return Response(serializer.data)
    