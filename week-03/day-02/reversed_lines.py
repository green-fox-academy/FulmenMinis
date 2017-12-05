# Create a method that decrypts reversed-lines.txt
def decrypt(file_name):
    try:
        orig_file = open(file_name, "r")
        new_file = open("reversed.txt", "w")
        text = orig_file.read()
        new_text = text[::-1]
        new_file.write(new_text)
    except IOError:
        return "Unable to write file."
decrypt("reversed-lines.txt")

