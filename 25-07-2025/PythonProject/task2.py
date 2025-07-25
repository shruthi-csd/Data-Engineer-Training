import math

def calculate_bmi(weight, height):
    bmi = weight / math.pow(height, 2)
    return bmi

weight = float(input("Enter your weight (kg): "))
height = float(input("Enter your height (m): "))

bmi = calculate_bmi(weight, height)
print("Your BMI is:", round(bmi, 2))

if bmi < 18.5:
    print("Underweight")
elif 18.5 <= bmi <= 24.9:
    print("Normal weight")
else:
    print("Overweight")

