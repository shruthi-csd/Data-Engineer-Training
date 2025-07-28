import pandas as pd


df = pd.read_csv('students.csv')


df.to_json('students.json', orient='records', indent=4)

print("Conversion done. File saved as 'students.json'")
