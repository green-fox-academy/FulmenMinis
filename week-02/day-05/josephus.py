#Exercise
#
#Write a function to solve Josephus Problem. 
# The program should ask for a number, this number represents how many people are in the "game". 
# The return value should be the number of the "winning" seat.
#Examples
#number of people 	number of the winning seat
#   1            	1
#   2            	1
#   3            	3
#   7            	7
#   12           	9
#   41  	        19 
# 
# # f(n) = 1 + 2 * (num - 2^([log2(n)]))

#Solution1
def josephus(n):
    p = 1
    x = 0
    while p <= n:
        p *= 2
        x = 1 + (2 * n) - p
    return x

#Solution from Laci
import math
def josephus_b(n):
    a = 0
    a = 1 + 2*n - 2**(1+int(math.log(n, 2)))
return a

#Test
print(josephus(1))
print(josephus(2))
print(josephus(3))
print(josephus(7))
print(josephus(12))
print(josephus(41))