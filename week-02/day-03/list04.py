# Accidentally we added "2" and "false" to the list. 
# Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
# No, don't just remove the items :)

#Solution 1
shop_items = ["Cupcake", 2, "Brownie", False]
shop_items[1] = "Croissant"
shop_items[3] = "Ice Cream"
print (shop_items)

#Solution 2
shop_items = ["Cupcake", 2, "Brownie", False]
if shop_items[1] == 2:
    shop_items[1] = "Croissant"
if shop_items[3] == False:
    shop_items[3] = "Ice Cream"
print (shop_items)