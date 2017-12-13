import unittest
from animal import Animal

class TestAnimal(unittest.TestCase):

    def test_animal_eating(self):
        animal1 = Animal()
        animal2 = Animal()
        self.assertEqual(animal1.eat(), 49)

    def test_animal_drinking(self):
        animal1 = Animal()
        animal2 = Animal()
        self.assertEqual(animal2.drink(), 49)

    def test_animal_playing(self):
        animal1 = Animal()
        animal2 = Animal()
        self.assertEqual(animal2.play(), (51, 51))
        self.assertEqual(animal1.play(), (51, 51))

if __name__ == '__main__':
    unittest.main()