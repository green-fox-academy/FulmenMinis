#Exercise
#
#Write a simple program to check if a given number is an armstrong number. 
# The program should ask for a number. E.g. if we type 371, the program should print out: 
# The 371 is an Armstrong number. 
# What is Armstrong number? 
# An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.
# Let's demonstrate this for a 4-digit number: 1634 is a 4-digit number, 
# raise each digit to the fourth power, and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634, so it is an Armstrong number.

#Solution1
number = input("Please enter a number: ")
numberlist = []
for i in range(len(number)):
    numberlist.insert(len(numberlist), int(number[i]))
sum = 0
for i in numberlist:
    sum += i ** len(numberlist)
print("The " + str(number) + " is an Armstrong number." if int(number) == sum 
else "The " + str(number) + " isn't an Armstrong number.")

#Solution2
x = input("Please enter a number: ")
exponent = len(x)
sum = 0
for c in x:
    sum += int(c)**exponent

if sum == int(x):
    print( x + " is an Armstrong number!")
else:
    print( x + " isn't an Armstrong number!")