def factorial(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result


print("Factorial of 5:", factorial(5))

#2
students = [("Aarav", 80), ("Sanya", 65), ("Meera", 92), ("Rohan", 55)]


print("Students scoring above 75:")
for name, score in students:
    if score > 75:
        print(name)


total = sum(score for _, score in students)
average = total / len(students)
print("Average score:", average)
#3

class BankAccount:
    def __init__(self, holder_name, balance=0):
        self.holder_name = holder_name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"{amount} deposited. New balance: {self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            raise Exception("Insufficient balance!")
        self.balance -= amount
        print(f"{amount} withdrawn. New balance: {self.balance}")

account1 = BankAccount("Aarav", 1000)
account1.deposit(500)
account1.withdraw(300)
#4

class SavingsAccount(BankAccount):
    def __init__(self, holder_name, balance=0, interest_rate=0.05):
        super().__init__(holder_name, balance)
        self.interest_rate = interest_rate

    def apply_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        print(f"Interest of {interest} applied. New balance: {self.balance}")


savings = SavingsAccount("Meera", 2000, 0.1)  # 10% interest
savings.deposit(1000)
savings.withdraw(500)
savings.apply_interest()




