# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was
'''n = int(input("Please enter a number: "))
for x in range(1, n+1):
    print("*" * x)
for y in range(n-1, 0, -1):
    print("*" * y)

