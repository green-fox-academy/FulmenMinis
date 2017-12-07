# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def star_adder(text):
    if text == '':
        return ''
    elif len(text) == 1:
        return text
    else:
        return text[0] + '*' + star_adder(text[1:])

print(star_adder('Xerxes knew it'))
