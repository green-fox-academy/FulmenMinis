import random

class Dice(object):

    def __init__(self):
        self.dice = [0, 0, 0, 0, 0, 0]

    def roll(self):
        for i in range(len(self.dice)):
            self.dice[i] = random.randint(1,6)
        return self.dice

    def get_current(self, index=None):
        if index != None:
            return self.dice[index]
        else:
            return self.dice

    def reroll(self, index=None):
        if index != None:
            self.dice[index] = random.randint(1,6)
        else:
            self.roll()


dice = Dice()
print(dice.get_current())
dice.roll()
print(dice.get_current())
while i in range (len(dice.get_current)):
    if dice.get_current(i) == 6:
        print(dice.get_current(i))
    else:
        dice.reroll(i)

'''dice.reroll(3)
print(dice.get_current(3)) #ez a 3. helyen lévő értéket hívja meg'''
print(dice.get_current())

