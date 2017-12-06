from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
#19 db 11x11 px
def drawing_function(x, y):
    canvas.create_rectangle(x, y, x+11, y+11, fill = 'medium orchid')
x=11
y=11
for i in range (0,19):
    drawing_function(x,y)
    x+=11
    y+=11

root.mainloop()
