# Create a method that decrypts reversed-order.txt
def decrypt(file_name):
    try:
        orig_file = open(file_name, "r")
        new_file = open("reversed2.txt", "w")
        text = orig_file.readlines()
        new_text = text[::-1]
        new_file.writelines(new_text)
    except IOError:
        return "Unable to write file."
decrypt("reversed-order.txt")
