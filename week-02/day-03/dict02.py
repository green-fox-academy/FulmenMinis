

students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints: 
#  - how many candies they have on average

def four_more():
    name = 0
    for i in students:
        if i["candies"] > 4:
            print(i['name'])
four_more()

def ave_candy():
    candy = 0
    for i in students:
        candy += i["candies"]
    print(candy / 4)

ave_candy()

