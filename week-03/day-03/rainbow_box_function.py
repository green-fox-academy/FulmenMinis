from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.
def drawing_function(x, y):
    canvas.create_rectangle(150 - (int(x)//2), 150 - (int(x)//2), 150 + (int(x)//2), 150 + (int(x)//2), fill=str(y))
colorlist = {'100':'midnight blue', '90':'navy', '80':'cornflower blue', '70':'dark slate blue',
    '60':'slate blue', '50':'medium slate blue', '40':'light slate blue', '30':'medium blue', '20':'royal blue', '10':'blue'}
for size, color in colorlist.items():
    drawing_function(size, color)
#drawing_function(10, '#123123')
root.mainloop()
