from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.
def drawing_function(x,y):
    canvas.create_rectangle(int(x), int(y), int(x)+50, int(y)+50)

drawing_function(100,100)
drawing_function(10,190)
drawing_function(299,299)    
root.mainloop()
