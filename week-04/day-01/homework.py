
tree1 = {'leaf_color': 'green', 'tree_type': 'oak', 'age': 3, 'sex': 'F'}
tree2 = {'leaf_color': 'yellow', 'tree_type': 'olive', 'age': 5, 'sex': 'F'}
tree3 = {'leaf_color': 'red', 'tree_type': 'cherry', 'age': 12, 'sex': 'M'}
tree4 = {'leaf_color': 'brown', 'tree_type': 'autumn', 'age': 7, 'sex': 'F'}
tree5 = {'leaf_color': 'pine', 'tree_type': 'lone pine', 'age': 15, 'sex': 'M'}

class Tree(object):
    def __init__(self, leaf_color, tree_type, age, sex):
        self.leaf_color = leaf_color
        self.tree_type = tree_type
        self.age = age
        self.sex = sex

tree1 = Tree('green', 'oak', 3, 'F')
tree2 = Tree('yellow', 'olive', 5, 'F')
tree3 = Tree('red', 'cherry', 12, 'M')
tree4 = Tree('brown', 'autumn', 7, 'F')
tree5 = Tree('pine', 'lone pine', 15, 'M')