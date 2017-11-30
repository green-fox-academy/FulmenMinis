# Find part of an integer
#
#    Create a function that takes two strings as a parameter
#    Returns the starting index where the second one is starting in the first one
#    Returns -1 if the second string is not in the first one
# Example
# input: "this is what I'm searching in", "searching"
# output: 17

#Solution1
def find_words(text, word):
    if text.find(word): #    if word in text: 
        return text.index(word)
    else:
        return -1
print(find_words("this is what I'm searching in", "searching"))

#Solution2
def find_words(text, word):
    for i in range(len(text)):
        if text[i:i+len(word)] == word:
            return i
    return -1
print(find_words("this is what I'm searching in", "searching"))


'''
#Exact word search:
def find_words(text, search):
    """Find exact words"""
    dText   = text.split()
    dSearch = search.split()

    found_word = 0

    for text_word in dText:
        for search_word in dSearch:
            if search_word == text_word:
                found_word += 1

    if found_word == len(dSearch):
        return len(dSearch)
    else:
        return False
print(find_words("this is what I'm searching in", "searching"))'''