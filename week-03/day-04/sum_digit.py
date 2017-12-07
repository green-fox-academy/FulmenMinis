# Given a non-negative int n, return the sum of its digits recursively (no loops). 
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
# divide (/) by 10 removes the rightmost digit (126 // 10 is 12).

#Solution 1
def sum_digit(n):
    if n > 0:
        return sum_digit(n // 10) + n % 10
    else:
        return 0
print(sum_digit(999999999999999999))

#Solution 2 w iterative
def sum_digit(n):
    s = 0
    while n > 0:
        s += n % 10
        n //= 10
    return s
print(sum_digit(999999999999999999))

#Solution 3 w built in funct
def sum_digit(n):
    return sum(map(int, str(n)))