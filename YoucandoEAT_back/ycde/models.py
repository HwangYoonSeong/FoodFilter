from django.db import models

# Create your models here.

class Food(models.Model):
    name = models.CharField(max_length=32)
    ingredientBit = models.IntegerField(default=0)
    ingredientDetail = models.TextField()

    def __str__(self):
        return f"\nname : {self.name}\ningredientBit : {self.ingredientBit}\ningredientDetail : {self.ingredientDetail}"


class Ingredient(models.Model):
    name = models.CharField(max_length=16)
    image = models.ImageField(upload_to='')

    def __str__(self):
        return f"\nname : {self.name}\nimage : {self.image}"


class Post(models.Model):
    writerID = models.CharField(max_length=32)
    title = models.CharField(max_length=32)
    contents = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    writer = models.CharField(max_length=32)
    postImg = models.ImageField(upload_to='')
    userImg = models.ImageField(upload_to='')


class Comment(models.Model):
    pid = models.IntegerField(default=0)
    writer = models.CharField(max_length=32)
    date = models.DateTimeField(auto_now_add=True)
    contents = models.TextField()
    writerImg = models.ImageField(upload_to='')


class User(models.Model):
    uid = models.CharField(max_length=32)
    filterBit = models.IntegerField(default=0)
    email = models.CharField(max_length=64)
    userImg = models.ImageField(upload_to='')