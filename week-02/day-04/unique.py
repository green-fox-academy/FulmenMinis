# Unique - remove the duplicates
# Create a function that takes a list of numbers as a parameter
# Returns a list of numbers where every number in the list occurs only once
# Example:

#input: [1, 11, 34, 11, 52, 61, 1, 34]
# output: [1, 11, 34, 52, 61]

def unique(*list_of_numbers):
    output=[]

    for i in list_of_numbers:
        if i not in output:
            output.append(i)
    print(output)

unique(1, 11, 34, 11, 52, 61, 1, 34)