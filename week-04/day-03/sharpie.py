# Sharpie

#     Search back in your own project the Sharpie class you made on the OO workshop
#     Create tests that covers all types of input (like in the previous workshop exercise)

class Sharpie(object):

    def __init__(self, color, width, ink_amount = 100):
        self.color = str(color)
        self.width = float(width)
        self.ink_amount = ink_amount

    def use(self, amount):
        self.ink_amount -= amount
        if self.ink_amount > 100:
            self.ink_amount = 100.0
        return self.ink_amount
