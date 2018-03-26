import unittest
from poker import Poker

class TestAll(unittest.TestCase):

    # def test_wrong_input(self):
    #     a = Poker()
    #     self.assertEqual(a.add(), 'wrong input')
    #     self.assertEqual(a.add(0, 0), 0)
    
    def test_high_card(self):
        a = Poker()
        self.assertEqual(a.check_hands(['2H', '3D', '5S', '9C', 'KD'], ['2C', '3H', '4S', '8C', 'KH']), "Black wins!")
        self.assertEqual(a.check_hands(['2H', '3D', '5S', '9C', 'KD'], ['2C', '3H', '4S', '8C', 'AH']), "White wins!")

    def test_check_one_pair(self):
        a = Poker()
        self.assertEqual(a.check_one_pair(['3H', '3D', '5S', '9C', 'KD'], ['2C', '5H', '4S', '8C', 'KH']), "White wins!")

if __name__ == '__main__':
    unittest.main()
