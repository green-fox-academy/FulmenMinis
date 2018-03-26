import random
 
num='0123456789'
code=''.join(random.sample(num,4))
attempt=10
 
def compare(guess,code):
    bullcow=[0,0]
    remaining_x=[]
    remaining_y=[]
    for x,y in zip(guess,code):
        if x==y:
            bullcow[0]+=1
        else:
            remaining_x.append(x)
            remaining_y.append(y)
    for x in remaining_x:
        if x in remaining_y:
            bullcow[1]+=1
            remaining_y.remove(x)
    return bullcow
 
 
while attempt>0:
    guess=input('Enter any four digits: ')
    if len(guess)==4:
        bullcow=compare(guess,code)
        if guess==code:
            print('Congrats, you cracked the code!')
            break
        else:
            print('You have %d bulls and %d cows' % (bullcow[0], bullcow[1]))
            attempt-=1
            print('You have %d attempts left' % attempt)
    else:
        print('Um, there aren\'t four digits in that entry...')
    if attempt==0:
        print('Sorry, the code you were looking for is ' + code)

#Sol2
