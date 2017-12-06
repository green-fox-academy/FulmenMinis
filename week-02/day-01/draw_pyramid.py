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

# Solution1
a = input("Pick a number: ")
a = int(a)
n = 0
sp = " "
cs = "*"
while n < a:
    print((a-1-n)*sp,(2*n+1)*cs,(a-1-n)*sp)
    n += 1

# Solution2
num = int(input("Pick a number: "))
sp = " "
cs = "*"
for i in range(0, num):
  print( sp * (num - i -1) + cs * (2 * i + 1))