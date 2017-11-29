
# Create a function called 'reverse_string' which takes a string as a parameter
# The function reverses it and returns with the reversed string


reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
reversed = reversed[::-1]
print(reversed)

#2 
def reverse(text):
    s = ''
    for i in text:
        s = i + s
    print (s)
reverse (".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI")
