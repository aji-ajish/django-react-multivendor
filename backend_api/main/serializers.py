from rest_framework import serializers
from . import models


class VendorSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(VendorSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class VendorDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        # fields=['user','address',]
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class ProductListSerializers(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True,read_only=True)
    class Meta:
        model = models.Product
        # fields=['user','address',]
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(ProductListSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductDetailSerializers(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True,read_only=True)
    class Meta:
        model = models.Product
        # fields=['user','address',]
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CustomerSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class CustomerDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializers, self).__init__(*args, **kwargs)

class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(OrderSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerAddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductRatingSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CategorySerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class CategoryDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        # fields=['user','address',]
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1
 
