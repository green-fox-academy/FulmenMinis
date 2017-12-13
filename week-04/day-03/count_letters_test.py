import unittest
from count_letters import count_letters

class TestCountLetters(unittest.TestCase):

    def test_word(self):
        self.assertEqual(count_letters('applause'), {'a': 2, 'p': 2, 'l': 1, 'u': 1, 's': 1, 'e': 1})

    def test_string(self):
        self.assertEqual(count_letters('william shakespeare'), {'w': 1, 'i': 2, 'l': 2, 'a': 3, 'm': 1, ' ': 1, 's': 2, 'h': 1, 'k': 1, 'e': 3, 'p': 1, 'r': 1})

    def test_string_with_spaces(self):
        self.assertEqual(count_letters('i am a weakish speller'), {'w': 1, 'i': 2, 'l': 2, 'a': 3, 'm': 1, ' ': 1, 's': 2, 'h': 1, 'k': 1, 'e': 3, 'p': 1, 'r': 1})

    def test_empty(self):
        self.assertEqual(count_letters(''), {})

if __name__ == '__main__':
    unittest.main()