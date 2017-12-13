# Anagram

#     Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
#     Create a test for that.

def anagram (word, anag):
    word = word.replace(" ", "") 
    anag = anag.replace(" ", "")    
    if sorted(word.lower()) == sorted(anag.lower()):
        return True
    else:
        return False
