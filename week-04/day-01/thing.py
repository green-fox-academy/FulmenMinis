
class Thing:
    def __init__(self, name):
        self.name = name
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):  # kockabeikszelés
        return ("[x] " if self.completed else "[ ] ") + self.name #használható egy sorba!!!!