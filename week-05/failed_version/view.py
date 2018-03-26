import tkinter

class View(object):
    def __init__(self):
        self.create_canvas()
        self.photo_images = {"floor": tkinter.PhotoImage(file="floor.png"),
                             "wall": tkinter.PhotoImage(file="wall.png"),
                             "hero-down": tkinter.PhotoImage(file="hero-down.png"),
                             "hero-up": tkinter.PhotoImage(file="hero-up.png"),
                             "hero-left": tkinter.PhotoImage(file="hero-left.png"),
                             "hero-right": tkinter.PhotoImage(file="hero-right.png"),
                             "skeleton": tkinter.PhotoImage(file="skeleton.png"),
                             "boss": tkinter.PhotoImage(file="boss.png"),
                             }

    def create_canvas(self):
        self.root = tkinter.Tk()
        self.canvas = tkinter.Canvas(self.root, width=900, height=720)
        self.root.bind("<KeyPress>", self.player_keypress)
        self.canvas.pack()

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

    def start(self):
        # self.draw_map()
        self.root.mainloop()

    def draw_image(self, pos_x, pos_y, image_name):
        return self.canvas.create_image(pos_x, pos_y, image=self.photo_images[image_name])

    def pos_to_pixel(self, position):
        return 36 + 71 * position

    def draw_map(self, game_map):
        for y, row in enumerate(game_map):
            for x, tile in enumerate(row):
                if tile == "_":
                    self.draw_image(self.pos_to_pixel(x), self.pos_to_pixel(y), "floor")
                elif tile == "X":
                    self.draw_image(self.pos_to_pixel(x), self.pos_to_pixel(y), "wall")

    def write_level_info(self, level):
        self.canvas.create_text(450, 350, font=(40), text="Level: " + str(level))

    def game_over_screen(self):
        pass
        