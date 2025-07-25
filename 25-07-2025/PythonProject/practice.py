print ("hello world")
list1 = ["apple","orange","banana"]
print(list1)
list1.append("garpes")
print(list1)
print(list1[1:2])
list1.pop(1)
print(list1)
marks = int(input("enter the marks"))
if marks >= 90:
    print("a grade")
elif marks >= 70:
    print ("b grade")
elif marks >= 50:
    print("c grade")
else:
    print("reattempt")

count = 1
while count <= 5:
    print ("the count is",count)
    count += 1

for i in range(5):
    print("number",i)
for i in range(1,6):
    print(i)
for i in range(1,10):
    if i == 5:
        continue
    if i == 8:
        break
    print(i)
