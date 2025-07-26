
use PersonalExpenseTracker


db.users.insertMany([
  {
    _id: 1,
    name: "shruthi",
    email: "shruthi2025@mail.com"
  },
  {
    _id: 2,
    name: "Sneha",
    email: "sneha.raju@email.com"
  },
  {
    _id: 3,
    name: "Vikram",
    email: "vikram_nair@domain.com"
  }
]);

db.categories.insertMany([
  { 
    _id: 1, 
    category_name: "Healthcare" 
  },
  { 
    _id: 2, 
    category_name: "Education" 
  },
  { 
    _id: 3, 
    category_name: "Rent" 
  },
  { 
    _id: 4, 
    category_name: "Entertainment" 
  },
  { 
    _id: 5, 
    category_name: "Travel" 
  }
]);


db.expenses.insertMany([
  {
    user_id: 1,
    category_id: 1,
    amount: 950,
    expense_date: ISODate("2025-07-03"),
    notes: "Pharmacy bill",
    receipt: { hospital: "MedPlus", bill_no: "MED001", medicines: 5 }
  },
  {
    user_id: 1,
    category_id: 2,
    amount: 2200,
    expense_date: ISODate("2025-07-06"),
    notes: "Online course purchase",
    receipt: { platform: "Udemy", course: "Python Basics" }
  },
  {
    user_id: 2,
    category_id: 3,
    amount: 6800,
    expense_date: ISODate("2025-07-09"),
    notes: "July rent",
    receipt: { landlord: "Mr. Ravi", receipt_no: "RENT456" }
  },
  {
    user_id: 2,
    category_id: 4,
    amount: 400,
    expense_date: ISODate("2025-07-13"),
    notes: "Weekend movie",
    receipt: { theatre: "INOX", movie: "Oppenheimer" }
  },
  {
    user_id: 3,
    category_id: 5,
    amount: 1750,
    expense_date: ISODate("2025-07-17"),
    notes: "One-day trip",
    receipt: { destination: "Yercaud", transport: "Car", food: "Yes" }
  }
]);


db.expenses.createIndex({ user_id: 1 });
db.expenses.createIndex({ "receipt.receipt_no": 1 }); 
db.users.createIndex({ email: 1 }, { unique: true });



db.expenses.find({ user_id: 1 });


db.expenses.aggregate([
  { $match: { user_id: 1 } },
  { $group: {
      _id: "$category_id",
      total_spent: { $sum: "$amount" }
  }},
  { $lookup: {
      from: "categories",
      localField: "_id",
      foreignField: "_id",
      as: "category"
  }},
  { $unwind: "$category" },
  { $project: {
      category_name: "$category.category_name",
      total_spent: 1
  }}
]);

db.expenses.find({ "receipt.receipt_no": "RENT456" });
