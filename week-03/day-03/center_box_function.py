from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.
def drawing_function(x):
    canvas.create_rectangle(150 - (int(x)//2), 150 - (int(x)//2), 150 + (int(x)//2), 150 + (int(x)//2))

drawing_function(100)
drawing_function(10)
drawing_function(259)    
root.mainloop()
