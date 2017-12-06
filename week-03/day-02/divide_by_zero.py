# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0
x = int(input("Type in a number: "))
try: 
    result = 10/x
    print(result) 
except ZeroDivisionError:
    print("fail") 