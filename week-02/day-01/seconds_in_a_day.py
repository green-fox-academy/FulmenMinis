current_hours = 14
current_minutes = 34
current_seconds = 42

# Write a program that prints the remaining seconds (as an integer) from a
# day if the current time is represented bt the variables

remaining_hours = 24-current_hours
remaining_minutes = 60-current_minutes
remaining_seconds = 60-current_seconds
print(remaining_seconds + (remaining_minutes * 60) + (remaining_hours * 3600))