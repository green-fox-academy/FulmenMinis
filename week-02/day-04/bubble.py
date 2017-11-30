# Sort that list
#    Create a function that takes a list of numbers as parameter
#    Returns a list where the elements are sorted in ascending numerical order
#    Make a second boolean parameter, if it's true sort that list descending - legyen növ/csökk True/False
# Example
# input [34, 12, 24, 9, 5]
# output [5, 9, 12, 24, 34]

desc=False

def bubble(list_of_numbers):
    for nums in range(len(list_of_numbers)-1,0,-1):
        for i in range(nums):
            if desc == True:
                if list_of_numbers[i]<list_of_numbers[i+1]:
                    temp = list_of_numbers[i]
                    list_of_numbers[i] = list_of_numbers[i+1]
                    list_of_numbers[i+1] = temp
            else:
                if list_of_numbers[i]>list_of_numbers[i+1]:
                    temp = list_of_numbers[i]
                    list_of_numbers[i] = list_of_numbers[i+1]
                    list_of_numbers[i+1] = temp

list_of_numbers = [34, 12, 24, 9, 5]#example numbers
bubble(list_of_numbers)
print(list_of_numbers)


'''
def reversed(list_of_numbers):
    for nums in range(len(list_of_numbers)-1,0,-1):
        for i in range(nums):
            if list_of_numbers[i]<list_of_numbers[i+1]:
                temp = list_of_numbers[i]
                list_of_numbers[i] = list_of_numbers[i+1]
                list_of_numbers[i+1] = temp
list_of_numbers = [34, 12, 24, 9, 5]
reversed(list_of_numbers)
print(list_of_numbers)'''