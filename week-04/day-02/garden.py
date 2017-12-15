class Plant(object):

    def __init__(self, collect = []):
        self.collect = collect

    def add_plant(self, plant):
        self.collect.append(plant)

    def watering(self, water):
        print("Watering with " + str(water))
        count = 0
        for i in self.collect:
            if i.plant == "flower" and i.water_level <= 5:
               count += 1
            elif i.plant == "tree" and i.water_level <= 10:
                count += 1
        water /= count
        for i in self.collect:
            if i.plant == "flower" and i.water_level <= 5:
                i.water_level += 0.75 * water
            elif i.plant == "tree" and i.water_level <= 10:
                i.water_level += 0.4 * water

class Flowers():
    def __init__(self, color, water_level, plant = "flower"):
        self.plant = plant
        self.color = color
        self.water_level = water_level

    def need_water(self):
        if self.water_level <= 5:
            print("The {} {} needs water".format(self.color, self.plant))
        else:
            print("The {} {} doesn't need water".format(self.color, self.plant))

class Trees():
    def __init__(self, color, water_level, plant = "tree"):
        self.plant = plant
        self.color = color
        self.water_level = water_level

    def need_water(self):
        if self.water_level <= 10:
            print("The {} {} needs water".format(self.color, self.plant))
        else:
            print("The {} {} doesn't need water".format(self.color, self.plant))

garden = Plant()

yellow = Flowers("yellow", 0)
blue = Flowers("blue", 0)
purple = Trees("purple", 0)
orange = Trees("orange", 0)

garden.add_plant(yellow)
garden.add_plant(blue)
garden.add_plant(purple)
garden.add_plant(orange)

yellow.need_water()
blue.need_water()
purple.need_water()
orange.need_water()

garden.watering(40)

yellow.need_water()
blue.need_water()
purple.need_water()
orange.need_water()

garden.watering(70)

yellow.need_water()
blue.need_water()
purple.need_water()
orange.need_water()
