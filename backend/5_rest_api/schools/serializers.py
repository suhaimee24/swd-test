from rest_framework import serializers
from .models import School


class SchoolSerializer(serializers.ModelSerializer):
  class Meta:
    model = School
    fields = "__all__"

  def create(self, validated_data):
    school = School.objects.create(**validated_data)
    return school
  
  def update(self, instance, validated_data):
    instance.name = validated_data.get('name', instance.name)
    instance.short_name = validated_data.get('short_name', instance.short_name)
    instance.address = validated_data.get('address', instance.address)
    instance.save()
    return instance

