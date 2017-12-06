# Sort that list
#    Create a function that takes a list of numbers as parameter
#    Returns a list where the elements are sorted in ascending numerical order
#    Make a second boolean parameter, if it's true sort that list descending - legyen növ/csökk True/False
# Example
# input [34, 12, 24, 9, 5]
# output [5, 9, 12, 24, 34]

list_of_numbers = [34, 12, 24, 9, 5]
asc = False

def bubble(list_of_numbers, asc):
    for i in range(len(list_of_numbers)):
        for j in range(len(list_of_numbers) - 1, i, -1):
            if asc == True:
                if list_of_numbers[j] < list_of_numbers[j - 1]:
                    tmp = list_of_numbers[j - 1]
                    list_of_numbers[j - 1] = list_of_numbers[j]
                    list_of_numbers[j] = tmp
            else:
                if list_of_numbers[j] > list_of_numbers[j - 1]:
                    tmp = list_of_numbers[j - 1]
                    list_of_numbers[j - 1] = list_of_numbers[j]
                    list_of_numbers[j] = tmp
    return list_of_numbers

print(bubble(list_of_numbers, asc))