# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

#Solution 1
numbers = [1, 2, 3, 4, 5, 6, 8]
if 7 in numbers:
    print('Hoorray')
else:
    print('Noooooo')

#Solution 2
numbers = [1, 2, 3, 4, 5, 6, 8]
match = 0
for i in numbers:
    if i == 7:
        match == 1
if match > 0:
    print('Hoorray')
else:
    print('Noooooo')
    