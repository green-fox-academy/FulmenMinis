from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300', bd='0')
canvas.pack()

# fill the canvas with a checkerboard pattern.

size = 37.5
cols = 8
rows = 8
squareList = []
for i in range(cols):
    for j in range(rows):
        if j%2: colors = ["black", "white"]
        else: colors = ["white", "black"]
        squareList.append(canvas.create_rectangle(i*size, j*size, i*size+size, j*size+size, fill=colors[i%2]))
root.mainloop()

#some GUI drawing basics from the internet:

from tkinter import *

def checkerboard(can):
    w=can.winfo_width()
    h=can.winfo_height()
    cellwidth = w/8
    cellheight=h/8
    for row in range(8):
        for col in range(8):
            if (row+col)%2==0:
                can.create_rectangle(col*cellwidth,row*cellheight,(col+1)*cellwidth,(row+1)*cellheight,fill='black')

window=Tk()
thecanvas = Canvas(window, width=300,height=300)
thecanvas.grid(row=0,column=0)
window.update_idletasks()
checkerboard(thecanvas)
window.mainloop()
