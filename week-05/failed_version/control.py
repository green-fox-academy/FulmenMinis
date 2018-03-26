from random import choice, randint

class Entity(object):
    def __init__(self, position):
        self.pos_x, self.pos_y = position

    def strike(self):
        pass

    def die(self):
        pass

    def level_up(self):
        pass

class Hero(Entity):
    def __init__(self, position):
        pass

    def change_model(self, direction):
        pass

    def chance_to_heal(self):
        pass

class Skeleton(Entity):
    def __init__(self, position, level):
        pass

    def get_move_direction(self):
        directions = ("up", "down", "left", "right")
        return choice(directions)

class Boss(Skeleton):
    def __init__(self, position, level):
        super().__init__(position, level)
        pass
