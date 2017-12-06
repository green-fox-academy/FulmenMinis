# Write a program that asks for two numbers and prints the bigger one
x = input("Pick a number: ")
y = input("Pick another number: ")
if int(x) > int(y):
    print(x)
elif int(x) < int(y):
    print(y)
else:
    print("Picked the same number twice!")