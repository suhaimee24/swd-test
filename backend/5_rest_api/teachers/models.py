from django.db import models
from schools.models import School
from classrooms.models import Classroom
import django_filters

class Teacher(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    gender = models.CharField(max_length=120)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    school = models.ForeignKey(School, on_delete=models.CASCADE)
    classrooms = models.ManyToManyField(Classroom)

    
    def __str__(self):
        return self.first_name


class TeacherFilter(django_filters.FilterSet):
    school = django_filters.CharFilter(field_name='school__name', lookup_expr='icontains')
    classrooms = django_filters.CharFilter(field_name='classrooms__year', lookup_expr='icontains')
    first_name = django_filters.CharFilter(lookup_expr='icontains')
    last_name = django_filters.CharFilter(lookup_expr='icontains')
    gender = django_filters.CharFilter(lookup_expr='icontains')


    class Meta:
        model = Teacher
        fields = ["school","classrooms"]