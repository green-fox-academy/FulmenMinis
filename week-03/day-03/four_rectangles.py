from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.
canvas.create_rectangle(5, 5, 25, 25, fill='green')
canvas.create_rectangle(30, 30, 55, 55, fill='blue')
canvas.create_rectangle(60, 60, 95, 95, fill='silver')
canvas.create_rectangle(100, 100, 155, 155, fill='light blue')
root.mainloop()
