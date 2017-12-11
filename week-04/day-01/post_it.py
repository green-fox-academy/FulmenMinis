#Post-it
#    Create a PostIt class that has
#        a background_color
#        a text on it
#        a text_color
#    Create a few example post-it objects:
#        an orange with blue text: "Idea 1"
#        a pink with black text: "Awesome"
#        a yellow with green text: "Superb!"

class PostIt(object):

    def __init__(self, background_color, text, text_color):
        self.background_color = background_color
        self.text = text
        self.text_color = text_color
postit1 = PostIt("orange", "Idea 1", "blue")
postit2 = PostIt("pink", "Awesome", "black")
postit3 = PostIt("yellow", "Superb", "green")


'''    def add_new_text(self, new_text):
        self.texts.append(new_text)
        self.status = "length of list: " + str(len(self.texts))
        return self.texts

    def check_state(self):
        print(self.status)

    def check_text(self):
        print(self.texts)'''