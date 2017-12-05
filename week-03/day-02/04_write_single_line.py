# Open a file called "my-file.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"

try:
    my_file = open("my-file.txt", "w") #ha 'r' csak akkor van hibaüzenet, különben létrehozza a nemlétező filet
    my_file.write("Horváth Emese")
    my_file.close()
except IOError:
    print("Unable to write file: my-file.txt")