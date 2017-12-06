# Exercise 1XP
#
#Create a function named is anag following your current language's style guide. 
# It should take two strings and return a boolean value depending on whether its an anag or not.
#Examples
#input 1 	input 2 	output
#"dog" 	    "god" 	    true
#"green" 	"fox" 	    false

#Solution1
word=input("Type in a word: ")
anag=input("Type in the words anagram: ")

def anagram (word, anag):
#   word = word.replace(" ", "") - if there are expressions with " " in it
#   anag = anag.replace(" ", "")    
    if sorted(word) == sorted(anag): #!sorted function
        return("True")
    else:
        return("False")

print(anagram(word, anag))

#Solution2 from stack
a=input("Type in a word: ")
b=input("Type in the words anagram: ")

def anagram(a,b):
    return cleanString(a) == cleanString(b)

def cleanString(string):
    return ''.join(sorted(string)).lower().split() # .join .sorted .lower . split
print(anagram(a,b))

#Solution3
def input_values():
    in_one = input("Type in a word: ")
    in_two = input("Type in the words anagram: ")
    sorted_one = "".join(sorted(in_one))
    sorted_two = "".join(sorted(in_two))
    return sorted_one, sorted_two

def check_anagram(sorted_one, sorted_two):
    if sorted_one == sorted_two:
        return True
    return False

print(check_anagram(*input_values()))