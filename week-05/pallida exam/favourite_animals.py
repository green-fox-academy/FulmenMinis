# The program's aim is to collect your favourite animals and store them in a text file.
# There is a given text file called '''favourites.txt''', it will contain the animals
# If ran from the command line without arguments
# It should print out the usage:
# ```fav_animals [animal] [animal]```
# You can add as many command line arguments as many favourite you have.
# One animal should be stored only at once
# Each animal should be written in separate lines
# The program should only save animals, no need to print them

import sys

class FavouriteAnimal(object):

    def __init__(self):
        self.usage = "fav_animals [animal] [animal]"
        self.file_name = "favourites.txt"
        self.fav_animals = []

    def get_fav_animals(self):
        for animal in sys.argv[1:]:
            fixed_animal_name = animal.replace("[", "").replace("]", "")
            if fixed_animal_name not in self.fav_animals:
                self.fav_animals.append(fixed_animal_name)
        return self.fav_animals

    def write_to_file(self):
        with open(self.file_name, "w") as text_file:
            for animal in self.get_fav_animals():
                text_file.write(("\n" if self.fav_animals[0] != animal else "") + animal)


class Controller(object):

    def __init__(self):
        self.favourite_animal = FavouriteAnimal()

    def workflow(self):
        if len(sys.argv) == 1:
            print(self.favourite_animal.usage)
        else:
            self.favourite_animal.write_to_file()

my_controller = Controller()
my_controller.workflow()

# Solution 2

from sys import argv


class Favourite:
    def __init__(self, name):
        self.name = name
        if len(argv) == 1:
            self.print_usage()
        elif len(argv) > 1:
            self.store_animal()

    def print_usage(self):
        print("favourite_animals.py 'animal' 'animal' .... ")

    def store_animal(self):
        for i in range(1, len(argv)):
            self.write_file(argv[i])

    def write_file(self, argument):
        fw = open(self.name, "r")
        lines = fw.readlines()
        fw.close()
        fw = open(self.name, "a")
        if argument + "\n" not in lines:
            fw.write(argument + "\n")
        fw.close()


controller = Favourite("favourites.txt")