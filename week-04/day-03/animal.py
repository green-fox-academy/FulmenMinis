# Animal

#     Search back in your own project directory the Animal class you made on the OO workshop
#     Create tests that covers all types of input (like in the previous workshop exercise)


class Animal(object):
    def __init__(self, hunger = 50, thirst = 50):
        self.hunger = hunger
        self.thirst = thirst
    
    def eat(self):
        self.hunger -= 1
        return self.hunger

    def drink(self):
        self.thirst -= 1
        return self.thirst

    def play(self):
        self.thirst += 1
        self.hunger += 1
        return self.hunger, self.thirst

