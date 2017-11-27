# Write a program that reads a number form the standard input,
# Than prints "Odd" if the number is odd, or "Even" it it is even.
x = int(input ('Type in a number! '))
x %= 2
if x == 1:
    print ('Odd')
if x == 0:
    print ('Even')