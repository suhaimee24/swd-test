from django.db import models
import django_filters

class School(models.Model):
    name = models.CharField(max_length=120)
    short_name = models.CharField(max_length=120)
    address = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class SchoolFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = School
        fields = ["name"]