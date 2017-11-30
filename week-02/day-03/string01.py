# I would like to replace "dishwasher" with "galaxy" in this example
# Please fix it for me!
# Expected ouput: In a galaxy far far away

#Solution 1
example = "In a dishwasher far far away"
example = example.replace ('dishwasher', 'galaxy')
print(example)

#Solution 2
example = "In a dishwasher far far away"
example = example[:5] + 'galaxy' + example[15:]
print(example)