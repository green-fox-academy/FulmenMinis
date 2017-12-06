# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %%  %
# % % %
# %  %%
# %   %
# %%%%%
#
# The square should have as many lines as the number was

#Solution1
a = input("Pick a number: ")
a = int(a)
a -= 1
n = 1
b = "%"
c = " "
print((a+1)*b)
while n < a:
    print(b+(n-1)*c+b+(a-n-1)*c+b)
    n += 1
print((a+1)*b)

#Solution2
num = input("Enter a number: ")
num = int(num)
str = "%" * num
within_space = num - 2
space = " " * num
print(str)
for i in range(within_space):
    print(str[0] + space[:i] + str[0] + space[:num - i - 3] + str[0])
print(str)