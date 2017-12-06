# Write a program that stores 3 sides of a cuboid as variables (doubles)
# The program should write the surface area and volume of the cuboid like:
# 
# Surface Area: 600
# Volume: 1000
a = input("Side A of the cuboid: ")
b = input("Side B of the cuboid: ")
c = input("Side C of the cuboid: ")
a = int(a)
b = int(b)
c = int(c)
surface = a*b*2 + b*c*2 + c*a*2
volume = a*b*c
print("Surface Area:",surface)
print("Volume:",volume)