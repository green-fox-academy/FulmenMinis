from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.
canvas.create_line(10, 10, 290, 10, fill='blue')
canvas.create_line(10, 10, 10, 290, fill='green')
canvas.create_line(10, 290, 290, 290, fill='silver')
canvas.create_line(290, 290, 290, 10, fill='black')
root.mainloop()
