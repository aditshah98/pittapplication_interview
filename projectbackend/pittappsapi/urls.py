from django.urls import path, include
from .views import  categoryApiView, appApiView,categoryAppApiView, editorChoiceAppsApiView

from rest_framework import routers

router = routers.SimpleRouter()
router.register('apps', appApiView, basename='apps')
router.register('category', categoryApiView, basename='category')
router.register('categoryBasedApps', categoryAppApiView, basename='categoryBasedApps')
router.register('editorBasedApps', editorChoiceAppsApiView, basename='editorBasedApps')


urlpatterns = [
    path('', include(router.urls))
]