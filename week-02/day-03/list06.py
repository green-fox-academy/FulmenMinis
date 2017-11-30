
# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts list_of_numbers as an input
# it should return "True" if it contains all, otherwise "False"

#Solution 1
list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]
list2 = [4, 8, 12, 16]
def check (y):
    for i in list2:
        if i in y:
            return(True)
        else:
            return(False)
print(check(list_of_numbers))

#Solution 2
list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]
def check (x=[]):
    if (4 in x) and (8 in x) and (12 in x) and (16 in x):
        return(True)
    else:
        return(False)

print(check(list_of_numbers))