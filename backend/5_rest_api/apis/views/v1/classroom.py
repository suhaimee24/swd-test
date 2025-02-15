from django.shortcuts import render
from classrooms.serializers import ClassroomSerializer
from classrooms.models import Classroom
from rest_framework import viewsets

class ClassroomViewSet(viewsets.ModelViewSet):
  queryset = Classroom.objects.all()
  serializer_class = ClassroomSerializer
