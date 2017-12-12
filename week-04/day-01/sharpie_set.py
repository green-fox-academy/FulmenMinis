#Sharpie Set
#
#    Reuse your Sharpie class
#    Create SharpieSet class
#        it contains a list of Sharpie
#        count_usable() -> sharpie is usable if it has ink in it
#        remove_trash() -> removes all unusable sharpies

class Sharpie(object): #helyette: import sharpie?

    def __init__(self, color, width, ink_amount = 100):
        self.color = color
        self.width = width
        self.ink_amount = ink_amount

    def use(self):
        self.ink_amount -= 1

    def __repr__(self): #Kell?
        return '[{}, {}, {}]'.format(self.color, self.width, self.ink_amount)

class SharpieSet(object):
    def __init__(self):
        self.sharpie = []

    def add(self, sharpie):
        self.sharpie.append(sharpie)

    def count_usable(self):
        self.usable_sharpie = 0
        for sharpie in self.sharpie:
            if sharpie.ink_amount > 0:
                self.usable_sharpie += 1
        return self.usable_sharpie

    def remove_trash(self):
        for sharpie in self.sharpie:
            if sharpie.ink_amount <= 0:
                self.sharpie.remove(sharpie)
    
    def __str__(self):
        result = ""
        for i in self.sharpie:
            result += str(i.color) + ", "
        return result
