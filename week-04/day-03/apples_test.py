import unittest
from apples import Apples

class TestApples(unittest.TestCase):

    def test_text(self):
        my_apple = Apples()
        self.assertEqual(my_apple.get_apple(), 'apple')

if __name__ == '__main__':
    unittest.main()