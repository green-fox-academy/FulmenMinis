badcat = {
    "name" = 'badcat'
    "cohort" = "corsac"
    "member_count" = 17
}
class Class(object):
    pass

badcat = Class()
print(badcat)

class People(object):
    
    alive = True
    count = 8

    def __init__(self, name):
        self, name = nev
        print(nev)
        print(self,name)
        People.count += 1
        self.greet() # a késöbb létrehozott fv-ket is már itt be tudjuk hívni

    def greet():
        print("Hello, {}!".format(self.name))

people = People("John")
print(people.name)

john = People("John")
jane = People("Jane")

john.count = 99 # csak john számlálóját pörgeti fel.
print("John: {}".format(john.count))

People.count = 2 #menetközben változtathatom a létszámot ami kihat mindenkire