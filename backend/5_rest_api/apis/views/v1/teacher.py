from teachers.serializers import TeacherSerializer
from teachers.models import Teacher, TeacherFilter
from rest_framework import viewsets
from rest_framework.response import Response
from classrooms.serializers import ClassroomSerializer


class TeacherViewSet(viewsets.ModelViewSet):
  queryset = Teacher.objects.all()
  serializer_class = TeacherSerializer
  filterset_class = TeacherFilter


  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    serializer = self.get_serializer(instance)
    classrooms = instance.classrooms.all()
    data = serializer.data
    data["classrooms"] = ClassroomSerializer(instance=classrooms, many=True).data
    return Response(data)