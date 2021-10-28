from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
                  path('', views.map_view, name="index"),
                  path('saved_coordinates', views.PointerListView.as_view(), name="saved_coordinates"),
              ] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
