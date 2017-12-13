# Fibonacci

#     Write a function that computes a member of the fibonacci sequence by a given index
#     Create tests that covers all types of input (like in the previous workshop exercise)
def fibonacci(n=0):
    if n < 0:
        return False
    elif n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return (fibonacci(n-1) + fibonacci(n-2))

