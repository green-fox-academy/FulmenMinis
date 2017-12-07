from tkinter import *
import random
root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)
def starry_night():
    for i in range(100):
        a = random.randrange(0, 255)
        color = '#%02x%02x%02x' % (a, a, a)
        x = random.randrange(0, 290)
        y = random.randrange(0, 290)
        canvas.create_rectangle(x, y, x+5, y+5, fill=color)

starry_night()

root.mainloop()
# R G B to HEX converter
# def rgbhex(r,g,b):
#   return '#%02x%02x%02x' % (r, g, b)
