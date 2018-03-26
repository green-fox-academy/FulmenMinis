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
        if water_level < 5:
            water_level += amount * 0,75 // 4
            
    print("Watering with "+str(amount))
class Flowers(object):
    def __init__(self, color, water_level=0):
        self.color = color
        self.water_level = water_level

    def need_water(self):
        if self.water_level < 5:
            return True

    def status(self):
        if self.water_level < 5:
            print("The {} flower needs water.".format(self.color))
        else:
            print("The {} flower doesn\'t need water.".format(self.color))




class Trees(object):
    def __init__(self, color, water_level=0):
        self.color = color
        self.water_level = water_level

    def need_water(self):
        if self.water_level < 10:
            return True

    def status(self):
        if self.water_level < 10:
            print("The {} tree needs water.".format(self.color))
        else:
            print("The {} tree doesn\'t need water.".format(self.color))
garden = []
my_garden = Garden()
yellow = Flowers("yellow" , 0)
garden.append(yellow)
blue = Flowers("blue", 0)
garden.append(blue)
purple = Trees("purple", 0)
garden.append(purple)
orange = Trees("orange", 0)
garden.append(orange)

for plants in garden:
    plants.status()

garden.watering(40)
for plants in garden:
    plants.status()
garden.watering(70)
for plants in garden:
    plants.status()
#if True: print ("cool")

#print(yellow.need_water())