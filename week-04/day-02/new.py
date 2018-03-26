class Person(): 
    def __init__(self, gender): # ha nem szeretném, hogy a külvilág piszkálhassa
        self.gender = gender

    @property
    def gender(self):           # a konstruktorban beállított gendert ezzel a prop annotációval és a __ elrejti, maga a kód nem látja, a felhasználó sem
        if(self.__gender == 'male'): #a getter és a setter együtt elrejti, privát-publikus megkülönböztetése
            return 0
        return 1

    @gender.setter
    def gender(self, gender):
        if(gender == 'female' or gender == 'male'):
            self.__gender = gender
        else:
            print('Do not do this') # direktben a gender prop nem elérhető de ha értéket kap akkor ellenőrzi


you = Person('male')
print('you.gender after instantiation: ', you.gender)

you.gender = 'horse'
print('you.gender after setting gender to "horse": ', you.gender)
you.__gender = 'horse'
print('you.gender after setting __gender to "horse": ', you.gender)
print('you.__gender after setting __gender to "horse": ', you.__gender)

you.gender = 'female'
print('you.gender after setting gender to "female": ', you.gender)
you.__gender = 'female'
print('you.gender after setting __gender to "female": ', you.gender)
print('you.__gender after setting __gender to "female": ', you.__gender)
