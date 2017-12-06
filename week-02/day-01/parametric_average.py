# Write a program that asks for a number.
# It would ask this many times to enter an integer,
# if all the integers are entered, it should print the sum and average of these
# integers like:
#
# Sum: 22, Average: 4.4

#Solution1
num = int(input ('Choose a number! '))
result = 0
for i in range(num):
    sum = input("Type in a number: ")
    result += int(sum)
print("Sum: ", result)
print("Average: ", result / num)

#Solution2
a = 0
b = 0
c = 0
n = input("Choose a number: ")
n = int(n)
if a == 0 and n > 0:
    b = input("Type in the first number: ")
    b = int(b)
    c = b
    a += 1
while a < n:
    b = input("Type in another number: ")
    b = int(b)
    c = c+b
    a += 1
print("Sum: ",c,"Average: ",c/n)
