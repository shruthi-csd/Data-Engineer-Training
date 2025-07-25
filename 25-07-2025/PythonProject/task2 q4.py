import random

secret = random.randint(1, 50)
chances = 5

print("Guess the number (between 1 and 50):")

for i in range(chances):
    guess = int(input(f"Attempt {i+1}: "))
    if guess == secret:
        print("🎉 Correct! You guessed it.")
        break
    elif guess < secret:
        print("Too Low!")
    else:
        print("Too High!")

else:
    print("😞 Out of chances! The number was:", secret)
