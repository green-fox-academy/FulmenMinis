from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/envelope-star/r2.png]

def line_drawing(i):
    canvas.create_line(150, 20 + i, 150 + i, 150, fill="red")
    canvas.create_line(150 + i, 150, 150, 299 - i, fill="black")
    canvas.create_line(20 + i, 150, 150, 150 + i, fill="blue")
    canvas.create_line(150, 20 + i, 150 - i, 150, fill="spring green")

for i in range(10, 140, 10):
    line_drawing(i)
root.mainloop()
