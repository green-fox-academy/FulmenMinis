all_food = [
        {'name': 'walnut', 'CH': 12, 'kcal': 654},
        {'name': 'peanut', 'CH': 8.5, 'kcal': 690},
        {'name': 'chickenbreast', 'CH': 0.5, 'kcal': 109},
        {'name': 'apple', 'CH': 7, 'kcal': 33},
        {'name': 'orange', 'CH': 8.5, 'kcal': 41},
        {'name': 'turorudi', 'CH': 39, 'kcal': 361},
        {'name': 'salad', 'CH': 3, 'kcal': 100}
]

breakfast, lunch, snack = input("Please type in the foodnames: ").split()
breakfast = str(breakfast)
lunch = str(lunch)
snack = str(snack)

food = []

def food_name(string1, string2, string3):
    if any(d['name'] == str(string1) or d['name'] == str(string2) or d['name'] == str(string3) for d in all_food):
        for i in range(len(all_food)):
            if all_food[i]['name'] == str(string1) or all_food[i]['name'] == str(string2) or all_food[i]['name'] == str(string3):
                food.append ({'CH': all_food[i]['CH'], 'kcal': all_food[i]['kcal']}) 
    else:
        print("404 - Shouldn't eat that! Not on the list")

food_name(breakfast, lunch, snack)

def cal_intake():
    calories = 0
    for i in food:
        calories += i["kcal"]
    print(calories)
cal_intake()

def carb_intake():
    carb = 0
    for i in food:
        carb += i["CH"]
    print(carb)
carb_intake()

