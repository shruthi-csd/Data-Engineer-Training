def is_strong(password):
    has_upper = False
    has_number = False
    has_special = False
    special_chars = "!@#$"

    for char in password:
        if char.isupper():
            has_upper = True
        elif char.isdigit():
            has_number = True
        elif char in special_chars:
            has_special = True

    return has_upper and has_number and has_special

while True:
    pwd = input("Enter a password: ")
    if is_strong(pwd):
        print("Strong password!")
        break
    else:
        print("Weak password. Must include uppercase, number, and special character (!@#$). Try again.")
