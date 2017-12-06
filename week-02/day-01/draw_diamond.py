# Write a program that reads a number from the standard input, then draws a
# diamond like this:
#
#
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *
#
# The diamond should have as many lines as the number was

num = int(input("Choose a number: "))
while num % 2 == 0:
    num = int(input("Choose an odd number: "))

for x in range((num-1)//2):
    print(((num//2)-x) * ' ' + (2*x+1) * '*')
for x in range((num-1)//2, -1, -1):
    print(((num//2)-x) * ' ' + (2*x+1) * '*')
