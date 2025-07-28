# import pandas as pd
#
# #read the csv
# df = pd.read_csv('employees.csv')
# print("CSV Road:\n",df)
#
# #write the csv
# df.to_csv('updated_employees.csv', index=False)
# print("CSV written to updated_employees.csv")

import json

#read json
with open('data.json','r') as f:
    data = json.load(f)
print("JSON Read:\n",data)

#writting json
with open('output.json','m')as f:
    json.dump(data,f,indent=4)

print("JSON written to output.json")