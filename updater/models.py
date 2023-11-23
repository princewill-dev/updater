from django.db import models

class Test(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField()

    def __str__(self):
        return self.text

