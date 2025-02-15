from django.shortcuts import render
from schools.serializers import SchoolSerializer
from schools.models import School
from rest_framework import viewsets


class SchoolViewSet(viewsets.ModelViewSet):
  queryset = School.objects.all()

  def get_serializer_class(self):
    return SchoolSerializer
