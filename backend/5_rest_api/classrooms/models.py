from django.db import models
from schools.models import School

class Classroom(models.Model):
    year = models.CharField(max_length=120)
    room = models.CharField(max_length=120)
    
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    school = models.ForeignKey(School, on_delete=models.CASCADE)

    def __str__(self):
        return self.year
