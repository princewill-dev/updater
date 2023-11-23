from django.urls import path
from .views import TestSaveView, TestRetrieveView

urlpatterns = [
    path('save/', TestSaveView.as_view(), name='test_save'),
    path('retrieve/', TestRetrieveView.as_view(), name='test_retrieve'),
]