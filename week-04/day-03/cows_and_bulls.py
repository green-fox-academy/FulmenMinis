# Cows and Bulls

# Create a class what is capable of playing exactly one game of Cows and Bulls (CAB). The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place, they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.”

#     The CAB object should have a random 4 digit number, which is the goal to guess.
#     The CAB object should have a state where the game state is stored (playing, finished).
#     The CAB object should have a counter where it counts the guesses.
#     The CAB object should have a guess method, which returns a string of the guess result
#     All methods, including constructor should be tested

import random

class CAB:
    list_digit = []

    def __init__(self, game_state="playing", counter=0, number=random.randint(1000, 9999)):
        self.game_state = game_state
        self.number = number
        self.counter = counter
        for i in range(4):
            self.list_digit.append((self.number//10**i) % 10)

    def guess(self, guess_number):
        self.counter += 1
        answer = []
        for i in range(4):
            if (guess_number//10**i) % 10 == self.list_digit[i]:
                answer.append("cow")
            else:
                answer.append("bull")
        answer.reverse()
        if answer == ["cow", "cow", "cow", "cow"]:
            self.game_state = "finished"
        return answer