from django.db import models
from schools.models import School
from classrooms.models import Classroom


class Teacher(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    sex = models.CharField(max_length=120)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    school = models.ForeignKey(School, on_delete=models.CASCADE)
    classrooms = models.ManyToManyField(Classroom)

    
    def __str__(self):
        return self.first_name


