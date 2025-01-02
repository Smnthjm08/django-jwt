from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(["GET"])
def getRoutes(request):
    routes = ["api/token", "api/token/refesh"]

    return Response(routes)
