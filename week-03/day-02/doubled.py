# Create a method that decrypts the duplicated-chars.txt

#Solution1
def decrypt(file_name):
    try:
        orig_file = open(file_name, "r")
        new_file = open("doubled.txt", "w")
        text = orig_file.read()
        new_text = text[::2]
        new_file.write(new_text)
    except IOError:
        return "Unable to write file."
decrypt("duplicated-chars.txt")
'''
#Solution2
import copy_file
def decrypt(file_name):
    try:
        orig_file = open(file_name, "r")
        new_file = open("doubled.txt", "w")
        text = orig_file.read()
        new_text = text[::2]
        new_file.write(new_text)
        new_text.close()
        copy_file.filecop('doubled.txt', file_name)
    except IOError:
        return "Unable to write file."
decrypt("duplicated-chars.txt")

def decrypt(file_name):
    b = []
    for index, value in enumerate(file_name):
        if index % 2 == 0:
            b.append(value)
    b = "".join(b)
decrypt('doubled.txt')

# stack1
k = list(s)
>>> "".join(k[::2])
'aceg'
#stack2
>>> s
'abcdefg'
>>> b = []
>>> for index, value in enumerate(s):
      if index % 2 == 0:
         b.append(value)
>>> b = "".join(b)

or even better:

>>> b = "".join(value for index, value in enumerate(s) if index % 2 == 0)'''