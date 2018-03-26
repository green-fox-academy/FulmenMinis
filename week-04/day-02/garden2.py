class Garden(object):
    def __init__(self):
        self.flowers = []
        self.trees = []

    def add_flower(self, Flowers):
        self.flowers.append(Flowers)

    def add_tree(self, Trees):
        self.flowers.append(Trees)

    def watering(self, amount):
        self.amount = amount
        need_water = 0
        for flower in self.flowers:
            need_water = need_water + 1 if flower.need_water else need_water
        for tree in self.trees:
            need_water = need_water + 1 if tree.need_water else need_water
        for flower in self.flowers:
            if flower.need_water:
                flower.get_watered(amount / need_water)  
        for tree in self.trees:
            if tree.need_water:
                tree.get_watered(amount / need_water)

    def get_status(self):
        for flower in self.flowers:
            flower.status()
        for tree in self.trees:
            tree.status()

class Flowers(object):
    def __init__(self, color, water_level=0):
        self.color = color
        self.water_level = water_level

    def get_watered(self, amount):
        self.water_level += amount * 0.75
        self.need_water = True if self.water_level < 5 else False
    
    def status(self):
        if self.water_level < 5:
            print("The {} flower needs water.".format(self.color))
        else:
            print("The {} flower doesn\'t need water.".format(self.color))

class Trees(object):
    def __init__(self, color, water_level=0):
        self.color = color
        self.water_level = water_level
    
    def status(self):
        if self.water_level < 10:
            print("The {} tree needs water.".format(self.color))
        else:
            print("The {} tree doesn\'t need water.".format(self.color))

    def get_watered(self, amount):
        self.water_level += amount * 0.4
        self.need_water = True if self.water_level < 10 else False

my_garden = Garden()

yellow = Flowers("yellow" , 0)
my_garden.add_flower(yellow)
blue = Flowers("blue", 0)
my_garden.add_flower(blue)
purple = Trees("purple", 0)
my_garden.add_tree(purple)
orange = Trees("orange", 0)
my_garden.add_tree(orange)

yellow.status()
blue.status()
purple.status()
orange.status()

my_garden.watering(40)
print("Watering with 40")
yellow.status()
blue.status()
purple.status()
orange.status()

my_garden.watering(70)
print("Watering with 70")
yellow.status()
blue.status()
purple.status()
orange.status()