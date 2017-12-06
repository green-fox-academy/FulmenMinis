
# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output 

#Solution1: kiírja a sorokat, n(i) az 1-eket beadja, a következő sor arra ad utasítást, hogy az 1- előtti szám álljon vissza 0-ra!
n = [0, 0, 0, 0]
for i in range(0, len(n)):
    n[i] = 1 #indexes vminek vhanyadik eleme
    n[i-1] = 0 #ha ez nincs akkor csupa 1-est ír lefelé
    print(*n, sep=' ')

#Solution2
n = 4
lista = [[0] * n for i in range(n)]
for i in range(n):
    for j in range(n):
        if i != j:
            lista[i][j] = 0
        else:
            lista[i][j] = 1
for i in range(n):
    for j in range(n):
        print(lista[i][j], end=' ')
    print()
