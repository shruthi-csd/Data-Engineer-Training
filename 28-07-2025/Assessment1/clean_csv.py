import pandas as pd
import numpy as np

df = pd.read_csv('students.csv')


df['Age'] = pd.to_numeric(df['Age'], errors='coerce')
df['Score'] = pd.to_numeric(df['Score'], errors='coerce')


avg_age = df['Age'].mean()
df['Age'] = df['Age'].fillna(avg_age)
df['Score'] = df['Score'].fillna(0)



df.to_csv('students_cleaned.csv', index=False)


print("Cleaned CSV saved as 'students_cleaned.csv'")
print(df)
