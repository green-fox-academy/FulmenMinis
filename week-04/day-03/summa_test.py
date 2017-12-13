import unittest
from summa import summa

class TestSumma(unittest.TestCase):
    def test_sum_an_empty_list(self):
        self. assertEqual(summa([]), 0)
    
    def test_sum_of_3_numbers(self):
        self. assertEqual(summa([4, 5, 6]), 15)

    def test_sum_of_1_number(self):
        self. assertEqual(summa([3]), 3)

if __name__ == '__main__':
    unittest.main()