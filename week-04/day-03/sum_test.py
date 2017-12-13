import unittest
from sum import Sum

class TestSum(unittest.TestCase):
    def test_sum_an_empty_list(self):
        self. assertEqual(sum([]), 0)
    
    def test_sum_of_3_numbers(self):
        self. assertEqual(sum([4, 5, 6]), 15)

    def test_sum_of_1_number(self):
        self. assertEqual(sum([3]), 3)
    
    def test_with_null(self):
        self.assertEqual(sum([None]), 0)

if __name__ == '__main__':
    unittest.main()