import pandas as pd

df = pd.read_csv("orders.csv")


df = df.fillna({'CustomerName': 'Unknown', 'Quantity': 0, 'Price': 0})

df['Quantity'] = df['Quantity'].astype(int)
df['Price'] = df['Price'].astype(float)


df['TotalAmount'] = df['Quantity'] * df['Price']


df.to_csv("orders_cleaned.csv", index=False)

print(" orders_cleaned.csv created successfully.")
