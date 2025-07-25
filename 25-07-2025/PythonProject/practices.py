for num in range (1,50):
     if num % 3 == 0:
         print ("Fizz",num)
     if num % 5 == 0 :
         print ("Buzz",num)
      if num % 3 == 0 and num % 5 ==0 :
          print ("FizzBuzz",num)

     correct_username = "admin"
     correct_password = "1234"
    for i in range(3):
      username = input("enter the username")
      password = input("enter the password")
      if username == correct_username and password == correct_password:
          print ("your account is opened")
      else:
          print("try again")
    else:
      print("account is locked")

     word = input("Enter a word: ")
    if word == word[::-1]:
      print("Palindrome")
     else:
      print("Not a Palindrome")

     n = int(input("Enter a number: "))
    print("Prime numbers from 1 to", n, "are:")
#
#
     for num in range(2, n + 1):
      is_prime = True
      for i in range(2, int(num**0.5) + 1):
          if num % i == 0:
              is_prime = False
              break
      if is_prime:
          print(num, end=" ")
#
     n = int(input("Enter the number of rows: "))
    for i in range(1, n + 1):
      print("*" * i)
#
    num = input("Enter a number: ")
     total = 0
    for digit in num:
      total += int(digit)
    print("Sum of digits:", total)

     num = int(input("Enter a number: "))
    for i in range(1, 11):
      print(f"{num} x {i} = {num * i}")
#
    sentence = input("Enter a sentence: ").lower()
     vowels = "aeiou"
    count = 0
    for char in sentence:
      if char in vowels:
          count += 1
    print("Number of vowels:", count)

#functions
def greet():
    print("hello hexaware!")

greet()
def greet(name):
    print(f"hello {name}! welcome")
greet("shruthi")

def add(a,b):
    return a + b
result = add(10,5)
print("sum is:",result)

def power(base,exponent=2):
    return base ** exponent
print(power(5))
print(power(5,3))
name = "umar"
print(len(name))

print(type(5))
print(type("hello"))

nums = [5,9,3]
print(sum(nums))
print(max(nums))
print(min(nums))

names = ["zara","amin","lina"]
print(sorted(names))
print(abs(-9))
print(round(3.75))
print(round(3.45678,2))

mymath.py
import math

print(math.sqrt(16))
print(math.pow(2,3))
print(math.pi)

import datetime as d
today = d.date.today()
print("today's date is:",today)

now = d.datetime.now()
print("current time is:",now.strftime("%H:%M:%S"))

def add(a,b):
    return a + b
def multiply(a,b):
    return a * b
import mymath
#
     print("Addition:",mymath.add(10,5))
    print("multiplication:",mymath.multiply(4,3))

from mypackage.calc import add,subtract
from mypackage.string_utils import shout, whisper

print(add(2,3))
print(shout("hello"))







