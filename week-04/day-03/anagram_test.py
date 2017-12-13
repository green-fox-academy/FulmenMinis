import unittest
from anagram import anagram

class TestAnagram(unittest.TestCase):

    def test_anagram(self):
        self.assertEqual(anagram('pool', 'loop'), True)

if __name__ == '__main__':
    unittest.main()