
def word_count(a_string):
    string_dict = {}
    for word in a_string.split():
        if word in string_dict:
            string_dict[word] += 1
        else:
            string_dict[word] = 1
    return string_dict

#Sol 2 built in function

from collections import Counter

def word_count(string):
    words = string.split()
    return dict(Counter(words))
print(word_count('applause'))