def analyze_expenses(expenses):
    total = sum(expenses)
    average = total / len(expenses)
    highest = max(expenses)

    print("Total spent: ₹", total)
    print("Average per day: ₹", round(average, 2))
    print("Highest spend in a day: ₹", highest)

expenses = []
print("Enter your daily expenses for 7 days:")

for i in range(7):
    amount = float(input(f"Day {i+1} expense: ₹"))
    expenses.append(amount)

analyze_expenses(expenses)
