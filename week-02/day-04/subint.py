# Find the part of int
#    Create a function that takes a number and a list of numbers as a parameter
#    Returns the indeces of the numbers in the list where the first number is part of
#    Returns an empty list if the number is not part any of the numbers in the list
#
# Example
#
#    input: [1, 11, 34, 52, 61], 1
#    output: [0, 1, 4]
output_list = []
def find_numbers(numlist, num):
    for i in range(len(numlist)):
        if str(num) in str(numlist[i]):
            output_list.append(i)  
    return output_list
print(find_numbers([14, 114, 34, 68, 95], 4))


