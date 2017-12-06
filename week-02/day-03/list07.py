# Accidentally I messed up this quote from Richard Feynman.
# Two words are out of place
# Your task is to fix it by swapping the right words with code

# Also, print the sentence to the output with spaces in between.
# What I cannot create, I do not understand

#Solution 1
words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."]
words[2], words[5] = words[5], words[2]
print(*words)

#Solution 2
words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."]
temp = words[2]
words[2] = words[5] 
words[5] = words[2]
words[5] = temp
print(*words)