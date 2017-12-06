from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
#x coords
#y size


def drawing_function(x, y, size):
    canvas.create_rectangle(x, y, x+int(size), y+int(size), fill = 'medium orchid')
x=10
y=10
size=10
for i in range (0,6):
    drawing_function(x, y, size)
    x += size
    y += size
    size += 10

root.mainloop()
