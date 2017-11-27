# Write a program that stores a number, and the user has to figure it out.
# The user can input guesses, after each guess the program would tell one
# of the following:
#
# The stored number is higher
# The stried number is lower
# You found the number: 8
number = 23
guess=0
while number != guess:
    guess = int(input ('What is your guess? '))
    if number > guess:
        print ("The stored number is higher")
    elif number < guess:
        print("The stored number is lower")
    elif number == guess:
        print ("You found the number: 23")
        break