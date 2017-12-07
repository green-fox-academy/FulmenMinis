# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def recursive_function(n):
    if n == 0 or n == 1:
        return n
    else:
        return (recursive_function(n-1) + recursive_function(n-2))

print(recursive_function(10))