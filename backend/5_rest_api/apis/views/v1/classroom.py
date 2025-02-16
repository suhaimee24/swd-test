from classrooms.serializers import ClassroomSerializer
from classrooms.models import Classroom, ClassroomFilter
from rest_framework import viewsets
from rest_framework.response import Response
from teachers.serializers import TeacherSerializer
from students.serializers import StudentSerializer

class ClassroomViewSet(viewsets.ModelViewSet):
  queryset = Classroom.objects.all()
  serializer_class = ClassroomSerializer
  filterset_class = ClassroomFilter

  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    serializer = self.get_serializer(instance)
    data = serializer.data
    data["teachers"] = TeacherSerializer(instance = instance.teacher_set.all(), many=True).data
    data["students"] = StudentSerializer(instance = instance.student_set.all(), many=True).data
    return Response(data)