# Write a function that copies a file to an other
# It should take the filenames as parameters
# It should return a boolean that shows if the copy was successful
def filecop (file1,file2):
    try:
        with open(file1, "r") as f1:
            lines = f1.read()
        with open(file2, "w") as f2:
            f2.writelines(lines)
        return "Finished!"
    except:
        return "Unable to open file: ", file1
file1 = 'apples.txt'
file2 = 'my-file.txt'
print(filecop(file1, file2))

'''
#Stackoverflow1:
import os
import tempfile

filename1 = tempfile.mktemp (".txt")
open (filename1, "w").close ()
filename2 = filename1 + ".copy"
print filename1, "=>", filename2

os.system ("copy %s %s" % (filename1, filename2))

if os.path.isfile (filename2): print "Success"
#Stackoverflow2:
import os
import shutil
import tempfile

filename1 = tempfile.mktemp (".txt")
open (filename1, "w").close ()
filename2 = filename1 + ".copy"
print filename1, "=>", filename2

shutil.copy (filename1, filename2)

if os.path.isfile (filename2): print "Success" '''
