# Write a function that takes a filename as string,
# then returns the number of lines the file contains.
# It should return zero if it can't open the file, and
# should not raise any error.
file_name = "my-file.txt"

def count_lines (file_name):
    try:
        with open(file_name) as f:
            for i, l in enumerate(f):
                pass
        return i + 1
    except IOError:
        return 0
print (count_lines(file_name))