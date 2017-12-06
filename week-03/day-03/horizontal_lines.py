from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.
def drawing_function(x,y):
    if int(x) > 250:
        canvas.create_line(int(x), int(y), int(x)-50, int(y))
    else:
        canvas.create_line(int(x), int(y), int(x)+50, int(y))

drawing_function(100,100)
drawing_function(10,190)
drawing_function(299,299)

root.mainloop()
