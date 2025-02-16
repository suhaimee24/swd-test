from django.db import models
from schools.models import School
import django_filters

class Classroom(models.Model):
    year = models.CharField(max_length=120)
    room = models.CharField(max_length=120)
    
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    school = models.ForeignKey(School, on_delete=models.CASCADE)

    def __str__(self):
        return self.school.name + " " + self.year + " " + self.room


class ClassroomFilter(django_filters.FilterSet):
    school = django_filters.CharFilter(field_name='school__name', lookup_expr='icontains')

    class Meta:
        model = Classroom
        fields = ["school"]