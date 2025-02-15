from django.shortcuts import render
from teachers.serializers import TeacherSerializer
from teachers.models import Teacher
from rest_framework import viewsets

class TeacherViewSet(viewsets.ModelViewSet):
  queryset = Teacher.objects.all()
  serializer_class = TeacherSerializer
