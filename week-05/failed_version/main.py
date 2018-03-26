import os
import sys
from random import randint
from time import sleep #?

from logic import *
from control import *
from view import *
from map import GameMap
from logic import GameLogic
from view import View
from sys import exit

class Game(object):
    def __init__(self):
        self.game_map = GameMap()
        self.game_logic = GameLogic(self.game_map)
        self.view = View()   

        self.level_start()
        self.enemy_actions()
        self.player_actions()
        self.check_game_status()

    def start_render(self):
        pass

    def stop_render(self):
        pass

    def render_entities(self):
        pass

    def render_hud(self):
        pass

    def enemy_actions(self):
        pass

    def player_actions(self):
        pass

    def move_player(self):
        pass
        
    def player_strike(self):
        pass

    def check_game_status(self):
        pass

    def show_game_level(self):
        pass

    def level_start(self):
        pass

game1 = Game()
game1.view.start()