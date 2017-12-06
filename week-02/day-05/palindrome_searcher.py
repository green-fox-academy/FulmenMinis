#Exercise

#Create a function named search palindrome following your current language's style guide. 
# It should take a string, search for palindromes that at least 3 characters long and 
# return a list with the found palindromes. 
# Examples 
# input 	output 
# "dog goat dad duck doodle never" 	["og go", "g g", " dad ", "dad", "d d", "dood", "eve"]
# "apple" 	                        []
# "racecar" 	                    ["racecar", "aceca", "cec"]
# "" 	                            []

def search_palindrome(anystring):
    matchlist = []
    palindrome = ""
    for i in range(len(anystring)):
        palindrome = anystring[i]
        for j in range(i+1, len(anystring)):
            palindrome += anystring[j] 
            if palindrome == palindrome[: :-1] and len(palindrome) > 2:
                matchlist.append(palindrome) 
    return matchlist

print(search_palindrome("dog goat dad duck doodle never"))
print(search_palindrome("apple"))
print(search_palindrome("racecar"))
print(search_palindrome(""))
