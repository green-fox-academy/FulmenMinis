# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

#Solution 1
girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"]
boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"]
order = []

for x, y in zip(girls, boys):
    order.append(x)
    order.append(y)
print(order)

#Solution 2
girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"]
boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"]
order = []

for i in range(len(girls)):
    order.append(girls[i])
    order.append(boys[i])
order.append(boys[5])
print(order)
