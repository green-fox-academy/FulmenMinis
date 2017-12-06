# - Write a function called `sum` that sum all the numbers
#   until the given parameter

#Solution1
def sum(num):
    total=0
    for a in range(num+1):
	    total += a
    return total

#Solution2
def sum(*args): 
    total = 0
    for a in args:
	    total += a
    print(total)