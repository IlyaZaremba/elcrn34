from django.contrib.gis.db import models


class Pointer(models.Model):
    coordinate = models.PointField(srid=4326)
