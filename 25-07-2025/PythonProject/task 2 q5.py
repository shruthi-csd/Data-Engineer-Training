import datetime

def calculate_total_and_average(marks):
    total = sum(marks)
    avg = total / len(marks)
    return total, avg

def get_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 70:
        return "B"
    else:
        return "C"

name = input("Enter student name: ")
marks = []
for i in range(1, 4):
    mark = float(input(f"Enter mark for subject {i}: "))
    marks.append(mark)

total, average = calculate_total_and_average(marks)
grade = get_grade(average)

print("\n--- Report Card ---")
print("Name:", name)
print("Total Marks:", total)
print("Average Marks:", round(average, 2))
print("Grade:", grade)
print("Date:", datetime.date.today())
