import unittest
from fibonacci import fibonacci

class TestFibonacci(unittest.TestCase):

    def test_number(self):
        self.assertEqual(fibonacci(11), 89)

    def test_zero(self):
        self.assertEqual(fibonacci(0), 0)

    def test_one(self):
        self.assertEqual(fibonacci(1), 1)

    def test_empty(self):
        self.assertEqual(fibonacci(), 3)
    
    def test_neg(self):
        self.assertEqual(fibonacci(-5), False)

if __name__ == '__main__':
    unittest.main()