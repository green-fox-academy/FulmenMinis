
# Create a function called 'reverse_string' which takes a string as a parameter
# The function reverses it and returns with the reversed string

#Solution 1
reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
reversed = reversed[::-1]
print(reversed)

#Solution 2
def slowreverse(text):
    s = ''
    for i in text:
        s = i + s
    print (s)
slowreverse (".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI")

#Solution 3
reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
def reverse(x):
    a = x[::-1]
    print(a)
reverse(reversed)

