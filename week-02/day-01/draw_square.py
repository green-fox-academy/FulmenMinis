# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was

num = input("Enter a number: ")
num = int(num)
str = "%" * num
white_space = num - 2
print(str)
for i in range(white_space):
    print(str[0] + (" " * white_space) + str[0])
print(str)
