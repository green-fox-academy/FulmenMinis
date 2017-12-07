# Given a string, compute recursively a new string where all the 'x' chars have been removed.
#Solution 1
def remover(text):
    if text == '':
        return ''
    if text[0] == 'x':
        return '' + remover(text[1:])
    return text[0] + remover(text[1:])

print(remover('Xerxes knew it'))

#Solution 2 for more universal use RECHECK!
def char_remover(oldchar, text):
    if text: #ez ugyanez? :if text == '':
        return ''
    if text[0] == oldchar:
        return '' + char_remover(oldchar, text[1:])
    return text[0] + char_remover(oldchar, text[1:])

print(char_remover('x', 'Xerxes knew it'))
'''
#Solution 3 with str.replace():
def remover(char, text):
    text.replace('char', '')'''
