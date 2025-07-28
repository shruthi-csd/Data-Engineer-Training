#1
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(7))
print(is_prime(10))

#2
def check_palindrome():
    s = input("Enter a string: ")
    reversed_s = s[::-1]
    print("Reversed string:", reversed_s)
    if s == reversed_s:
        print("It's a palindrome.")
    else:
        print("Not a palindrome.")
check_palindrome()
#3
numbers = [5, 2, 9, 5, 2, 7, 9, 1]

unique_numbers = list(set(numbers))
unique_numbers.sort()
print("Sorted unique numbers:", unique_numbers)

if len(unique_numbers) >= 2:
    print("Second largest number:", unique_numbers[-2])
else:
    print("Not enough unique numbers.")

4
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

class Employee(Person):
    def __init__(self, name, age, employee_id, department):
        super().__init__(name, age)
        self.employee_id = employee_id
        self.department = department

    def display(self):
        super().display()
        print(f"Employee ID: {self.employee_id}, Department: {self.department}")

emp = Employee("Shruthi", 22, "E101", "IT")
emp.display()

#5
class Vehicle:
    def drive(self):
        print("Vehicle is driving")

class Car(Vehicle):
    def drive(self):
        print("Car is driving smoothly")

v = Vehicle()
v.drive()

c = Car()
c.drive()



