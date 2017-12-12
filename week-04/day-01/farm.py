# Reuse your Animal class
# Create a Farm class
# it has list of Animals
# it has slots which defines the number of free places for animals
# breed() -> creates a new animal if there's place for it
# slaughter() -> removes the least hungry animal

from animal import Animal

class Farm(object):
    def __init__(self, slot=23):
        self.animal = []
        self.slot = slot

    def add(self, animal):
        if self.slot > 0:
            self.animal.append(animal)
            self.slot -= 1
    
    def breed(self):
        if self.slot > 0:
            new_animal = Animal()
            self.animal.append(new_animal)
            self.slot -= 1
    
    def slaughter(self):
        hunger = 0
        for animal in self.animal:
            if animal.hunger > hunger:
                hunger = animal.hunger
        for animal in self.animal:
            if animal.hunger == hunger:
                self.animal.remove(animal)
        self.slot += 1

    def __str__(self):
        result = ""
        for i in range(0, len(self.animal)):
            result += str(i + 1) + ". " + self.animal[i].__str__() + "\n"
        return result
