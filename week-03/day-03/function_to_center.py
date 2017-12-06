from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.
#Solution 1

def draw_line(x, y):
    line = canvas.create_line(x, y, 150, 150)
for i in range(0, 301, 20):
    draw_line(i, 0)
    draw_line(i, 300)
for i in range(0, 301, 20):
    draw_line(0, i)
    draw_line(300, i)

root.mainloop()

#Unfinished Solution 2
'''def drawing_function(x,y):
    canvas.create_line(int(x), int(y), 150, 150)
if x >= 20 and y==0
if x <= 281 and y==0
if y >= 20 and x==0
if y <= 281 and x==0'''

def drawing(x, y):
    for i in range(15):
        x += 20
        canvas.create_line(x, y, 150, 150)
    for i in range(15):
        y += 20
        canvas.create_line(x, y, 150, 150)
    for i in range(15):
        x -= 20
        canvas.create_line(150, 150, x, y)
    for i in range(15):
        y -= 20
        canvas.create_line(150, 150, x, y)

drawing(2, 2)
root.mainloop()
