from schools.serializers import SchoolSerializer
from schools.models import School, SchoolFilter
from rest_framework import viewsets
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend


class SchoolViewSet(viewsets.ModelViewSet):
  queryset = School.objects.all()
  serializer_class = SchoolSerializer
  filterset_class = SchoolFilter

  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    serializer = self.get_serializer(instance)
    data = serializer.data
    data["classroom_count"] = instance.classroom_set.count()
    data["teacher_count"] = instance.teacher_set.count()
    data["student_count"] = instance.student_set.count()
    return Response(data)
