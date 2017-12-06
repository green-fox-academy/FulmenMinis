# Crate a program that draws a chess table like this
#
# % % % % 
#  % % % %
# % % % %
#  % % % %
# % % % %
#  % % % %
# % % % % 
#  % % % %
#
#Solution1
for i in range(8):
    if i % 2 == 0:
        print("% % % %")
    else:
        print(" % % % %")
        
#Solution2
x = " "
y = "%"
a = 0
n = 4
while a < n:
    print((y+x)*n)
    print((x+y)*n)
    a += 1