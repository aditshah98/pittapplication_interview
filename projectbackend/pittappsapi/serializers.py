from rest_framework import serializers
from .models import category, appdes

class appdesSerializer(serializers.ModelSerializer):
    class Meta:
        model=appdes
        fields='__all__'

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model=category
        fields='__all__'