from students.serializers import StudentSerializer
from students.models import Student, StudentFilter
from rest_framework import viewsets
from rest_framework.response import Response
from classrooms.serializers import ClassroomSerializer

class StudentViewSet(viewsets.ModelViewSet):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer
  filterset_class = StudentFilter

  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    serializer = self.get_serializer(instance)
    data = serializer.data
    data["classroom"] = ClassroomSerializer(instance.classroom).data
    return Response(data)