#1
n=int(input("Enter number:"))
temp=n
rev=0
while(n>0):
    dig=n%10
    rev=rev*10+dig
    n=n//10
if(temp==rev):
    print("The number is a palindrome!")
else:
    print("The number isn't a palindrome!")

#2
str1=str(input('enter string:'))
save=str1
revstr=str1[::-1]
if save==revstr:
     print("string is pailandrom")
else:
     print("not pailadrom")

#3
def is_palindrome(word):

    letters = list(word)    
    is_palindrome = True
    i = 0

    while len(letters) > 0 and is_palindrome:       
        if letters[0] != letters[-1]:
            is_palindrome = False
        else:
            letters.pop(0)
            if len(letters) > 0:
                letters.pop(-1)

    return is_palindrome

#4
def is_palindrome(word):

    letters = list(word)
    is_palindrome = True

    for letter in letters:
        if letter == letters[-1]:
            letters.pop(-1)
        else:
            is_palindrome = False
            break

    return is_palindrome

#5 
def function(...):
    ...
    for i in range (0, (len(num) + 1) / 2):
        if r[i] != num[i]:
            return False
    return True
#easier:
def palindrome(num):
    return num == num[::-1]