
from django.db import models

# Create your models here.

class category(models.Model):
    name=models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class appdes(models.Model):
    APP_CHOICES=[
        ('EDITORSCHOICE','Editors_Choice')
    ]
    appcat=models.ForeignKey(category, on_delete=models.CASCADE, null=True) #category
    title=models.CharField(max_length=255) #name
    slug=models.SlugField(max_length=255,null=True,blank=True) 
    appshorts=models.CharField(max_length=255, default='',null=True,blank=True)
    appdescription=models.TextField(null=True,blank=True) #app description
    appimageurl=models.URLField(max_length=250, null=True,blank=True) #image url
    appothercats=models.TextField(null=True,blank=True)
    appeditorchoice=models.CharField(max_length=100,choices=APP_CHOICES,null=True,blank=True) #editors choice yes or no

    def __str__(self):
        return self.title 
