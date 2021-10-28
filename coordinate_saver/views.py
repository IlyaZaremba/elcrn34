from django.shortcuts import render
from .models import Pointer
from django.contrib.gis.geos import Point
import json
from django.views import generic

def map_view(request):
    return render(request, "coordinate_saver/index.html")


class PointerListView(generic.ListView):
    model = Pointer
    paginate_by = 20
    template_name = "coordinate_saver/saved_coordinates.html"

    def post(self, request, *argv, **kwarg):
        latlng = json.loads(request.body)
        p = Point(float(latlng["lat"]), float(latlng["lng"]))
        pointer = Pointer(coordinate=p)
        pointer.save()
