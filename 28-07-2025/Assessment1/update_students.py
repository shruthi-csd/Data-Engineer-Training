import pandas as pd
import numpy as np


df = pd.read_csv('students_cleaned.csv')


def get_status(score):
    if score >= 85:
        return 'Distinction'
    elif score >= 60:
        return 'Passed'
    else:
        return 'Failed'

df['Status'] = df['Score'].apply(get_status)


df['Tax_ID'] = 'TAX-' + df['ID'].astype(str)


df.to_csv('students_updated.csv', index=False)

print("Q8 Done! 'students_updated.csv' created with Status and Tax_ID columns.")
