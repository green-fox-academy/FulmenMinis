class Car(object):
    brand = ""
    model = ""
    color = ""

car1 = Car()
car2 = Car()

car1.brand = "Nissan"
car1.model = "Sunny"
car1.color = "green"
car2.brand = "Mercedes"
car2.model = "190"
car2.color = "red"

print("Brand of car1: " + car1.brand + ", Model: " + car1.model + ", Color: " + car1.color)
print("Brand of car2: " + car2.brand + ", Model: " + car2.model + ", Color: " + car2.color)
# miért nincs init? 
# mert kb üres lenne: def __init__(self): pass
# nem jó def így, ehelyett:
def __init__(self, brand, model, color): 
    self.brand =brandself.model=model
    self.color=color

car1 = car("Nissan", "Sunny", "green")
car2 = car("Mercedes", "198", "red")