import tkinter
from random import choice, randint
from sys import exit

import pygame
pygame.init()


class View(object):
    def __init__(self):
        self.create_canvas()
        self.photo_images = {"floor": tkinter.PhotoImage(file="floor.png"),
                             "wall": tkinter.PhotoImage(file="wall.png"),
                             "hero-down": tkinter.PhotoImage(file="hero-down.png"),
                             "hero-up": tkinter.PhotoImage(file="hero-up.png"),
                             "hero-left": tkinter.PhotoImage(file="hero-left.png"),
                             "hero-right": tkinter.PhotoImage(file="hero-right.png"),
                             "skeleton": tkinter.PhotoImage(file="skeleton" + str(randint(1,4)) + ".png"),
                             "boss": tkinter.PhotoImage(file="boss.png"),
                             }
        self.player_move_direction = None
        self.player_strike = False
        self.entity_ids = []
        self.hud = []

    def create_canvas(self):
        self.root = tkinter.Tk()
        self.canvas = tkinter.Canvas(self.root, width=900, height=700)
        self.root.bind("<KeyPress>", self.player_keypress)
        self.canvas.pack()

    def draw_image(self, pos_x, pos_y, image_name):
        return self.canvas.create_image(pos_x, pos_y, image=self.photo_images[image_name])

    def pos_to_pixel(self, position):
        return 36 + 71 * position

    def start(self):
        self.root.mainloop()

    def player_keypress(self, e):
        if e.keycode == 37:
            self.player_move_direction = "left"
        elif e.keycode == 38:
            self.player_move_direction = "up"
        elif e.keycode == 39:
            self.player_move_direction = "right"
        elif e.keycode == 40:
            self.player_move_direction = "down"
        elif e.keycode == 32:
            self.player_strike = True


    def draw_map(self, game_map):
        for y, row in enumerate(game_map):
            for x, tile in enumerate(row):
                if tile == "_":
                    self.draw_image(self.pos_to_pixel(x), self.pos_to_pixel(y), "floor")
                elif tile == "X":
                    self.draw_image(self.pos_to_pixel(x), self.pos_to_pixel(y), "wall")

    def draw_entities(self, entities):
        for entity in entities:
            pos_x = self.pos_to_pixel(entity.pos_x)
            pos_y = self.pos_to_pixel(entity.pos_y)
            self.entity_ids.append(self.draw_image(pos_x, pos_y, entity.current_image))

    def delete_entities(self):
        for entity in self.entity_ids:
            self.canvas.delete(entity)
        self.entity_ids = []
            
    def draw_HUD(self, hero):
        player_info = ("Hero: \n" + "Level: " + str(hero.level) + "\n" +
                       "Health points: " + str(hero.current_hp) + "/" + str(hero.max_hp) + "\n" +
                       "Defense points: " + str(hero.dp) + "\n" +
                       "Attack points: " + str(hero.sp))
        self.hud.append(self.canvas.create_text(800, 50, text=player_info))
        if hero.fighting_enemy:
            enemy_info = ("Fighting Monster: \n" + "Level: " + str(hero.fighting_enemy.level) + "\n" +
                          "Health points: " + str(hero.fighting_enemy.current_hp) + "/" + str(hero.fighting_enemy.max_hp) + "\n" +
                          "Defense points: " + str(hero.fighting_enemy.dp) + "\n" +
                          "Attack points: " + str(hero.fighting_enemy.sp))
            self.hud.append(self.canvas.create_text(800, 150, text=enemy_info))
                                                    
    def delete_hud(self):
        for hud_element in self.hud:
            self.canvas.delete(hud_element)
        self.hud = []   

    def clear_view(self):
        self.canvas.delete("all")

    def write_level_info(self, level):
        self.canvas.create_text(450, 350, font=("Arial", 40), text="Level: " + str(level))

    def game_over_screen(self):
        self.canvas.create_text(450, 350, font=("Arial", 40), text="GAME OVER")
        pygame.mixer.music.load('EvilLaugh.mp3')
        pygame.mixer.music.play()


#map

class GameMap(object):
    def __init__(self):
        self.game_map = []
        self.choose_map()

    def choose_map(self):
        file_name = "map" + str(randint(1,9)) + ".txt"
        self.read_map_from_file(file_name)

    def read_map_from_file(self, file_name):
        with open(file_name, "r") as map_file:
            map_file = map_file.read().split("\n")
            for i in range(len(map_file)):
                map_file[i] = map_file[i].split(",")
            self.game_map = map_file

    def is_wall(self, pos_x, pos_y):
        return self.game_map[pos_y][pos_x] == "X"

    def get_random_tile(self):
        pos_x = randint(0, 9)
        pos_y = randint(0, 9)
        while self.is_wall(pos_x, pos_y):
            pos_x = randint(0, 9)
            pos_y = randint(0, 9)
        return [pos_x, pos_y]

#logic

import entities

class GameLogic(object):
    def __init__(self, game_map):
        self.game_map = game_map
        self.current_level = 0
        self.key_found = False
        self.boss_dead = False
        self.entities = [entities.Hero([0, 0])]
        self.hero = self.entities[0]


    def start_level(self):
        self.game_map.choose_map()
        self.hero.chance_to_heal()
        self.current_level += 1
        self.key_found = False
        self.boss_dead = False
        self.hero.pos_x, self.hero.pos_y = self.game_map.get_random_tile()
        self.hero.can_strike = False
        self.hero.fighting_enemy = None
        self.entities = self.entities[0:1]
        self.generate_enemies()

    def generate_enemies(self):
        for i in range(3):
            # self.photo_images["skeleton"] = "skeleton" + str(randint(1,4)) + ".png"
            self.entities.append(entities.Skeleton(self.game_map.get_random_tile(), self.current_level))
        self.entities[1].has_key = True
        self.entities.append(entities.Boss(self.game_map.get_random_tile(), self.current_level))

    def move_entity(self, entity, direction):
        pos_x, pos_y = self.get_new_pos_from_direction(entity.pos_x, entity.pos_y, direction)
        if self.find_entity_at_position(pos_x, pos_y):
            self.initiate_fight(entity, self.find_entity_at_position(pos_x, pos_y))
        elif self.is_valid_move(pos_x, pos_y) and not entity.fighting_enemy:
            entity.pos_x = pos_x
            entity.pos_y = pos_y
        if entity == self.hero:
            entity.change_model(direction)

    def find_entity_at_position(self, pos_x, pos_y):
        for entity in self.entities:
            if entity.pos_x == pos_x and entity.pos_y == pos_y:
                return entity
        return 0

    def is_valid_move(self, pos_x, pos_y):
        return (pos_x >= 0 and pos_x < 10 and
                pos_y >= 0 and pos_y < 10 and
                not self.game_map.is_wall(pos_x, pos_y))

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
        if not attacker.evil == defender.evil and not defender.fighting_enemy:
            attacker.fighting_enemy = defender
            attacker.can_strike = True
            defender.fighting_enemy = attacker

    def enemy_strike(self, enemy):
        if enemy.can_strike:
            enemy.strike()

    def remove_dead_entity(self, entity):
        if entity.current_hp <= 0:
            del self.entities[self.entities.index(entity)]
            if isinstance(entity, entities.Boss):
                self.boss_dead = True
            if entity.has_key:
                self.key_found = True

    def is_level_over(self):
        return self.boss_dead and self.key_found



#entities

#running

class App(object):
    def __init__(self):
        self.game_map = GameMap()
        self.game_logic = GameLogic(self.game_map)
        self.view = View()   

        self.level_start()
        self.enemy_actions()
        self.player_actions()
        self.check_game_status()

    def start_render(self):
        self.render_entities()
        self.render_hud()
        self.render = self.view.root.after(60, self.start_render)

    def stop_render(self):
        self.view.root.after_cancel(self.render)

    def render_entities(self):
        self.view.delete_entities()
        self.view.draw_entities(self.game_logic.entities)

    def render_hud(self):
        self.view.delete_hud()
        self.view.draw_HUD(self.game_logic.hero)

    def enemy_actions(self):
        for enemy in self.game_logic.entities[1:]:
            self.game_logic.move_entity(enemy, enemy.get_move_direction())
            self.game_logic.enemy_strike(enemy)
            self.game_logic.remove_dead_entity(enemy)
        self.view.root.after(500, self.enemy_actions)

    def player_actions(self):
        self.move_player()
        self.player_strike()
        self.view.root.after(60, self.player_actions)

    def move_player(self):
        if self.view.player_move_direction != None:
            self.game_logic.move_entity(self.game_logic.hero, self.view.player_move_direction)
            self.view.player_move_direction = None
        
    def player_strike(self):
        if self.view.player_strike and self.game_logic.hero.can_strike:
            self.game_logic.hero.strike()
            pygame.mixer.music.load('scream.mp3')
            pygame.mixer.music.play()
        self.view.player_strike = False

    def check_game_status(self):
        if self.game_logic.is_level_over():
            self.stop_render()
            self.level_start()
        elif self.game_logic.hero.current_hp <= 0:
            self.stop_render()
            self.view.clear_view()
            self.view.game_over_screen()
            self.view.root.after(1500, exit)
        self.view.root.after(2000, self.check_game_status)

    def show_game_level(self):
        self.view.clear_view()
        self.view.write_level_info(self.game_logic.current_level + 1)
        self.view.root.after(1000, self.view.clear_view)
        
    def level_start(self):
        self.show_game_level()
        self.view.root.after(1100, self.game_logic.start_level)
        self.view.root.after(1200, lambda: self.view.draw_map(self.game_map.game_map))
        self.view.root.after(1200, self.start_render)
        pygame.mixer.music.load('applause.mp3')
        pygame.mixer.music.play()


app = App()
app.view.start()