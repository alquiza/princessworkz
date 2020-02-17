from django.db import models

class User(models.Model):
  username = models.CharField(max_length=64)
  last_name = models.CharField(max_length=64)
  first_name = models.CharField(max_length=64)
  middle_name = models.CharField(max_length=64)
  email_address = models.EmailField()
  
  