# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

#Solution1
num = int(input ('Type in a number! '))
for x in range (1, num+1):
    print('*' * x)

#Solution2
a = input("Pick a number: ")
a = int(a)
b = "*"
n = 0
while n < a:
    n += 1
    print(n*b)