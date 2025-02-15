from django.db import models

class School(models.Model):
    name = models.CharField(max_length=120)
    short_name = models.CharField(max_length=120)
    address = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
