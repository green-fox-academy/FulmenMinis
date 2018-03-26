from tkinter import *

root = Tk()

SIZE = 900

canvas = Canvas(root, width=SIZE, height=SIZE, bg="yellow")
canvas.pack()

def draw_rect(x, y, size):
    canvas.create_rectangle(x, y, x + size, y + size)

def draw(offset_x, offset_y, size):
    if size < 5:
        return

    unit = size / 3

    draw_rect(
      unit + offset_x,
      0 + offset_y,
      unit)
    draw_rect(
      2 * unit + offset_x,
      unit + offset_y,
      unit)
    draw_rect(
      unit + offset_x,
      2 * unit + offset_y,
      unit)
    draw_rect(
      0 + offset_x,
      unit + offset_y,
      unit)

    draw(
      unit + offset_x,
      0 + offset_y,
      unit)
    draw(
      2 * unit + offset_x,
      unit + offset_y,
      unit)
    draw(
      unit + offset_x,
      2 * unit + offset_y,
      unit)
    draw(
      0 + offset_x,
      unit + offset_y,
      unit)

draw(0, 0, SIZE)

root.mainloop()