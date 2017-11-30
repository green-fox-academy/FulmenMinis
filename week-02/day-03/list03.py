
# Create a function called 'create_new_verbs()' which takes a list of verbs and a string as parameters
# The string shouldf be a preverb
# The function appends every verb to the preverb and returns the list of the new verbs

#Solution 1
verbs = ["megy", "ver", "kapcsol", "rak", "néz"]
preverb = "be"

def create_new_verbs():
    new_verbs = []
    for i in verbs:
        new_verbs.append(preverb + i)
    print(new_verbs)
create_new_verbs()

#Solution 2
verbs = ["megy", "ver", "kapcsol", "rak", "néz"]
preverb = "be"

def create_new_verbs(verbs,preverb):
    new_verbs = []
    for i in range(len(verbs)):
        new_verbs.append(preverb + verbs[i])
    print(new_verbs)
create_new_verbs(verbs,preverb)