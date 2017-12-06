# Create a method that decrypts encoded-lines.txt
# Solution1
def decrypt(file_name):
    orig_file = open(file_name, "r")
    new_file = open("encoded.txt", "w")
    lines = orig_file.readlines()
    for line in lines:
        string = ""
        for char in line:
            number = ord(char)
            if number != 32:
                temporary = chr(number - 1)
                string += temporary
            else:
                string += " "
        new_file.writelines(string + "\n")
    new_file.writelines(string + "\n")
    print("Finished!")
decrypt("encoded-lines.txt")

#Solution2
def decrypt(file_name):
    try:
        orig_file = open(file_name, "r")
        text = orig_file.readlines()
        orig_file.close()
        new_file = open("encoded.txt", "w")
        for line in text:
            new_text = ""
            for i in range(len(line) -1):
                if line[i] == " ":
                    new_text += " "
                else:
                    new_text += chr(ord(line[i]) -1)
            new_text += '\n'
            new_file.writelines(new_text)
        new_file.close()
    except IOError:
        return "Unable to write file."
decrypt("encoded-lines.txt")
