from django.db import models

class Category(models.Model):
  name = models.CharField(max_length=64, unique=True)

class Unit(model.Model):
  UNIT_CHOICE = [
    { piece, 'Piece' }
    { inche, 'Inches' }
    { millimeter, 'Millimeter' }
    { centimeter, 'Centimeter' }
    { meter, 'Meter' }
    { kilometer, 'Kilometer' }
    { gram, 'Gram' }
  ],

  name = models.CharField(max_length=64, unique=True)

class Asset(models.Model):
  category = models.OneToOneField(Category, on_delete=models.CASCADE)
  name = models.CharField(max_length=64, unique=True)
  count = models.IntegerField()
  unit = models.OneToOneField(Unit, on_delete=models.CASCADE)
  cost = models.DigitField()

