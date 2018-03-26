suit_list = ("C", "D", "H", "S")
num_list = ("2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A")

class Card(object):
    def __init__(self, numeral, suit):
        self.numeral = numeral
        self.suit = suit
        self.card = self.suit, self.numeral
    def __repr__(self):
        return  self.suit + self.numeral


class Poker(object):
    def add(self, num1, num2):
        if (type(num1) is int and type (num2) is int):
            return num1 + num2
        return 'wrong input'