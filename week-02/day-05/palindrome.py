#Exercise
#Create a function named create palindrome following your current language's style guide. 
# It should take a string, create a palindrome from it and then return it.
#Examples
#input 	output 
# "greenfox" 	"greenfoxxofneerg"
# "123" 	    "123321"

#My version
word=input("Type in a word: ")
def palindrome (word):
    word += word[::-1]
    print(word)
palindrome(word)

#Solution2
def palindrome (word):
    word += word[::-1]
    return word
print(palindrome("123"))
print(palindrome("greenfox"))