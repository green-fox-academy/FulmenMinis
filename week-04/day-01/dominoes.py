from domino import Domino

def initialize_dominoes():
    dominoes = []
    dominoes.append(Domino(5, 2))
    dominoes.append(Domino(4, 6))
    dominoes.append(Domino(1, 5))
    dominoes.append(Domino(6, 7))
    dominoes.append(Domino(2 ,4))
    dominoes.append(Domino(7, 1))
    return dominoes

dominoes = initialize_dominoes()
# You have the list of Dominoes
# Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
# eg: [2, 4], [4, 3], [3, 5] ...


for items in range(len(dominoes)):
    for num in range(1,len(dominoes)):
        if dominoes[items].values[1] == dominoes[num].values[0]:
            dominoes[items+1], dominoes[num] = dominoes[num], dominoes[items+1]


'''def order_dom(dominoes):
    for i in range(len(dominoes) - 1):
        if dominoes[i][1] != dominoes[i + 1][0]:
            return False
    return True'''

'''
output_list = []

for i in range(dominoes):
    if values[0] in Domino[i+1]values[1]:
        output_list.append(i)  
    return output_list
'''
print(dominoes)