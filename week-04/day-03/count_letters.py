# Count Letters

#     Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
#     Create a test for that.

def count_letters(word):
    letters = {}
    for i in word:
        if i in letters:
            letters[i] += 1
        else:
            letters[i] = 1
    return letters

#print(count_letters('william shakespeare'))
