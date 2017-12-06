#Exercise
#Write a program where the program chooses a number between 1 and 100. 
# The player is then asked to enter a guess. If the player guesses wrong, 
# then the program gives feedback and ask to enter an other guess until the guess is correct.
#   - Make the range customizable (ask for it before starting the guessing).
#   - You can add lives. (optional)

#Solution with optionals added
import random

chosen_range = input("Choose a range between 2 numbers: ")
range_start, range_end = chosen_range.split()
my_number = random.randint(int(range_start), int(range_end))
lives = (int(range_end) - int(range_start)) // 10
your_number = int(input("I've chosen a number between " +  range_start + "-" + range_end + ". You have " + str(lives) + " lives. Guess my number: "))
while lives > 0:
    if your_number == my_number:
        print("You won!")
        lives = 0
    elif your_number > my_number:
        lives -= 1
        if lives > 0:
            print("The number is lower. You have " + str(lives) + " lives left.")
            your_number = int(input("Guess again: "))
        else:
            print("You have no more lives left. GAME OVER")
            lives = 0
    else:
        lives -= 1
        if lives > 0:
            print("The number is higher. You have " + str(lives) + " lives left.")
            your_number = int(input("Guess again: "))
        else:
            print("No more lives left. GAME OVER")
            lives = 0
