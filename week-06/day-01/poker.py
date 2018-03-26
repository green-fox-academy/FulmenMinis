cards = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14}

class Poker(object):

    def check_hands(self, hand1, hand2):
        highest_card_of_black = 0
        for card in hand1:
            if cards[card[0]] > highest_card_of_black:
                highest_card_of_black = cards[card[0]]
        highest_card_of_white = 0
        for card in hand2:
            if cards[card[0]] > highest_card_of_white:
                highest_card_of_white = cards[card[0]]
        if highest_card_of_black < highest_card_of_white:
            return "White wins!"
        return "Black wins!"

    def check_one_pair(self, hand1, hand2):
        return "Black wins!"
