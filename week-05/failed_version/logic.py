import control

class GameLogic(object):
    def __init__(self, game_map):
        self.game_map = game_map

    def start_level(self):
        self.game_map.choose_map()
        
    def generate_enemies(self):
        pass

    def move_entity(self, entity, direction):
        pass

    def find_entity_at_position(self, pos_x, pos_y):
        pass

    def is_valid_move(self, pos_x, pos_y):
        pass

    def get_new_pos_from_direction(self, pos_x, pos_y, direction):
        if direction == "up":
            pos_y -= 1
        elif direction == "down":
            pos_y += 1
        elif direction == "left":
            pos_x -= 1
        elif direction == "right":
            pos_x += 1  
        return pos_x, pos_y

    def initiate_fight(self, attacker, defender):
        pass

    def enemy_strike(self, enemy):
        pass

    def remove_dead_entity(self, entity):
        pass

    def is_level_over(self):
        pass
