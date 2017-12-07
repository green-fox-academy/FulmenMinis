# Given a string, compute recursively (no loops) a newchar string where all the
# lowercase 'x' chars have been changed to 'y' chars.

#Solution 1
def changer(text):
    if text == '':
        return ''
    if text[0] == 'x':
        return 'y' + changer(text[1:])
    return text[0] + changer(text[1:])

print(changer('Xerxes knew it'))

#Solution 2 for more universal use
def char_changer(text, oldchar, newchar):
    if text == '':
        return ''
    if text[0] == oldchar:
        return newchar + char_changer(text[1:], oldchar, newchar)
    return text[0] + char_changer(text[1:], oldchar, newchar)

print(char_changer('Xerxes knew it', 'x', 'y'))