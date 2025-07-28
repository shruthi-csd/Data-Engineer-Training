import numpy as np
import pandas as pd


scores = np.random.randint(35, 101, size=20)


above_75 = np.sum(scores > 75)

mean_score = np.mean(scores)
std_dev = np.std(scores)


print(" Student Scores:", scores)
print(f"Students scoring above 75: {above_75}")
print(f" Mean Score: {mean_score:.2f}")
print(f"Standard Deviation: {std_dev:.2f}")


df = pd.DataFrame({'Score': scores})
df.to_csv("scores.csv", index=False)

print(" scores.csv created successfully.")


