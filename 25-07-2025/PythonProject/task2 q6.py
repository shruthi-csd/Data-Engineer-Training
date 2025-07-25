contacts = {}

while True:
    print("\n--- Contact Saver Menu ---")
    print("1. Add Contact")
    print("2. View Contacts")
    print("3. Save & Exit")
    choice = input("Enter your choice: ")

    if choice == "1":
        name = input("Enter name: ")
        phone = input("Enter phone number: ")
        contacts[name] = phone
        print("Contact added.")

    elif choice == "2":
        if not contacts:
            print("No contacts yet.")
        else:
            for name, phone in contacts.items():
                print(f"{name} - {phone}")

    elif choice == "3":
        with open("contacts.txt", "w") as file:
            for name, phone in contacts.items():
                file.write(f"{name} - {phone}\n")
        print("Contacts saved to contacts.txt. Goodbye!")
        break

    else:
        print("Invalid choice. Try again.")
