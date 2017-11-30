# Queue of festivalgoers at entry
# no. of alcohol units 
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
watchlist = []
security_alcohol_loot = 0
queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

def security_check(queue):
    who_enters = []
    security_alcohol_loot = 0
    for i in range(len(queue)):

        if queue[i]['alcohol'] > 0:
            security_alcohol_loot += queue[i]['alcohol']
            queue[i]['alcohol'] = 0

        if queue[i]['guns'] > 0:
            watchlist.append(queue[i]['name'])
            queue[i]['guns'] = 0

        if queue[i]['alcohol'] == 0 and queue[i]['guns'] == 0:
            who_enters.append(queue[i]['name'])

    print(security_alcohol_loot)
    return who_enters

print(security_check(queue))
print(watchlist)
print(queue)