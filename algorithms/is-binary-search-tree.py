""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

def checkBST(root):
    tree_array = []

    def construct_array(node):
        if node is None:
            return

        construct_array(node.left)
        tree_array.append(node.data)
        construct_array(node.right)

    construct_array(root)

    for i in range(len(tree_array) - 1):
        if tree_array[i] >= tree_array[i + 1]:
            return False

    return True


# return tree_array == sorted(tree_array) and len(set(tree_array)) == len(tree_array)