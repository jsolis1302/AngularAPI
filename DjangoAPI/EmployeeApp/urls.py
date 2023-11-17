from django.urls import  path,re_path
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    #path("departments",views.departmentApi,name = "index"),
    #path("<int:id>",views.departmentApi,name = "department"),
    
    #path("<int:id>",views.employeeApi,name = "employees"),
    #path("employees",views.employeeApi,name = "employees"),
    re_path(r'^department/$',views.departmentApi),
    re_path(r'^department/([0-9]+)$',views.departmentApi),
    #url(r'department/$', views.departmentApi),
    #url(r'department/([0-9]+)$', views.departmentApi)
    re_path(r'^employee/$',views.employeeApi),
    re_path(r'^employee/([0-9]+)$',views.employeeApi),
    re_path(r'^SaveFile$',views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
