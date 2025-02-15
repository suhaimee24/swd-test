from django.shortcuts import render
from students.serializers import StudentSerializer
from students.models import Student
from rest_framework import viewsets

class StudentViewSet(viewsets.ModelViewSet):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer

