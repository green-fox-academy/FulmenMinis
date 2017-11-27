# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was
num = int(input ('Type in a number! '))
for x in range (1,num+1):
    print('*' * x)