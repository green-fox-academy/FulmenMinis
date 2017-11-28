# - Create a function called `factorio`
#   that returns it's input's factorial
def factorio(num):
    total=1
    for a in range(1,num+1):
	    total *= a
    return total

print(factorio(5))
