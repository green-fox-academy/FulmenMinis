from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/super-hexagon/r6.gif]

def draw_hexagon():
    green_line = canvas.create_line(140, 160, 160, 160, fill="black")
    green_line = canvas.create_line(140, 190, 160, 190, fill="black")
    green_line = canvas.create_line(130, 175, 140, 160, fill="black")
    green_line = canvas.create_line(130, 175, 140, 190, fill="black")
    green_line = canvas.create_line(170, 175, 160, 160, fill="black")
    green_line = canvas.create_line(170, 175, 160, 190, fill="black")

for x in range(6):
    draw_hexagon()

root.mainloop()
