

# Create a function that prints the ingredient list of dictionaries to the console in the following format:
#
# +--------------------+---------------+----------+
# | Ingredient         | Needs cooling | In stock |
# +--------------------+---------------+----------+
# | vodka              | Yes           | 1        |
# | coffee_liqueur     | Yes           | -        |
# | fresh_cream        | Yes           | 1        |
# | captain_morgan_rum | Yes           | 2        |
# | mint_leaves        | No            | -        |
# +--------------------+---------------+----------+
#
# OPTIONAL:
# The frist columns should be automatically as wide as the longest key

ingredients = [
	{ "name": "vodka", "in_stock": 1, "needs_cooling": True },
	{ "name": "coffee_liqueur", "in_stock": 0, "needs_cooling": True },
	{ "name": "fresh_cream", "in_stock": 1, "needs_cooling": True },
	{ "name": "captain_morgan_rum", "in_stock": 2, "needs_cooling": True },
	{ "name": "mint_leaves", "in_stock": 0, "needs_cooling": False },
	{ "name": "sugar", "in_stock": 0, "needs_cooling": False },
	{ "name": "lime juice", "in_stock": 0, "needs_cooling": True },
	{ "name": "soda", "in_stock": 0, "needs_cooling": True }
]

def table_printer():

    long = len(ingredients[0]['name'])

    for i in range(len(ingredients)):
        if len(ingredients[i]['name']) > long:

            long = len(ingredients[i]['name']) + 1
    print("+" + "-" * (long + 1) + "+" + "-" * 15 + "+" + "-" * 10 + "+")
    print("| Ingredient" + " " * (long - 10) + "|" + " Needs cooling" + " |" + " In stock " + "|")
    print("+" + "-" * (long  + 1) + "+" + "-" * 15 + "+" + "-" * 10 + "+")

    for j in range(len(ingredients)):

        ingredient = ingredients[j]['name']
        needscool = str(ingredients[j]['needs_cooling'])
        instock = str(ingredients[j]['in_stock'])

        ingred = ingredient + " " * (long - len(ingredient))
        needsc = " " + needscool + " " * (14 - len(needscool))

        if instock == "0":
            instock = "-"

        instoc = " " + instock + " " * (9 - len(instock))
        print("| " + ingred + "|" + needsc + "|" + instoc + "|")
    print("+" + "-" * (long + 1) + "+" + "-" * 15 + "+" + "-" * 10 + "+")

table_printer()
