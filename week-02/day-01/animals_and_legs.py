# Write a program that asks for two integers
# The first represents the number of chickens the farmer has
# The seconf represents the number of pigs the farmer has
# It should print how many legs all the animals have
x = input("Number of chickens: ")
y = input("Number of pigs: ")
legs = int(x) * 2 + int(y) * 4
print("The number of legs: " + str(legs))
