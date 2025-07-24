use companyDB
switched to db companyDB
db["Library Management"].find()
db.books.insertMany([
{ book_id: 201, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction",
copies: 10 },
{ book_id: 202, title: "Atomic Habits", author: "James Clear", genre: "Self-Help",
copies: 5 },
{ book_id: 203, title: "Sapiens", author: "Yuval Noah Harari", genre: "History",
copies: 7 },
{ book_id: 204, title: "The Lean Startup", author: "Eric Ries", genre: "Business",
copies: 3 },
{ book_id: 205, title: "Deep Work", author: "Cal Newport", genre: "Productivity",
copies: 4 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881bc8605832fb175c7c0fe'),
    '1': ObjectId('6881bc8605832fb175c7c0ff'),
    '2': ObjectId('6881bc8605832fb175c7c100'),
    '3': ObjectId('6881bc8605832fb175c7c101'),
    '4': ObjectId('6881bc8605832fb175c7c102')
  }
}

db.members.insertMany([
{ member_id: 101, name: "Ayesha Khan", joined_on: new Date("2024-01-15") },
{ member_id: 102, name: "Rahul Verma", joined_on: new Date("2024-03-12") },
{ member_id: 103, name: "Nikita Rao", joined_on: new Date("2024-04-10") }
])


{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881bcb905832fb175c7c106'),
    '1': ObjectId('6881bcb905832fb175c7c107'),
    '2': ObjectId('6881bcb905832fb175c7c108')
  }
}

db.borrowed.insertMany([
{ borrow_id: 1, member_id: 101, book_id: 201, date: new Date("2024-06-01"),
returned: true },
{ borrow_id: 2, member_id: 101, book_id: 203, date: new Date("2024-06-15"),
returned: false },
{ borrow_id: 3, member_id: 102, book_id: 202, date: new Date("2024-06-20"),
returned: false },
{ borrow_id: 4, member_id: 103, book_id: 204, date: new Date("2024-06-22"),
returned: true }
])

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881bcc705832fb175c7c109'),
    '1': ObjectId('6881bcc705832fb175c7c10a'),
    '2': ObjectId('6881bcc705832fb175c7c10b'),
    '3': ObjectId('6881bcc705832fb175c7c10c')
  }
}
db.books.find({ genre: "Self-Help" })
{
  _id: ObjectId('6881bc8605832fb175c7c0ff'),
  book_id: 202,
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-Help',
  copies: 5
}
db.members.find({ joined_on: { $gt: new Date("2024-03-31") } })
{
  _id: ObjectId('6881bc9505832fb175c7c105'),
  member_id: 103,
  name: 'Nikita Rao',
  joined_on: 2024-04-10T00:00:00.000Z
}
{
  _id: ObjectId('6881bcb905832fb175c7c108'),
  member_id: 103,
  name: 'Nikita Rao',
  joined_on: 2024-04-10T00:00:00.000Z
}
db.borrowed.find({ returned: false })
{
  _id: ObjectId('6881bcc705832fb175c7c10a'),
  borrow_id: 2,
  member_id: 101,
  book_id: 203,
  date: 2024-06-15T00:00:00.000Z,
  returned: false
}
{
  _id: ObjectId('6881bcc705832fb175c7c10b'),
  borrow_id: 3,
  member_id: 102,
  book_id: 202,
  date: 2024-06-20T00:00:00.000Z,
  returned: false
}
db.books.find({ copies: { $lt: 5 } })
{
  _id: ObjectId('6881bc8605832fb175c7c101'),
  book_id: 204,
  title: 'The Lean Startup',
  author: 'Eric Ries',
  genre: 'Business',
  copies: 3
}
{
  _id: ObjectId('6881bc8605832fb175c7c102'),
  book_id: 205,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  copies: 4
}
db.books.find({ author: "Cal Newport" })
{
  _id: ObjectId('6881bc8605832fb175c7c102'),
  book_id: 205,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  copies: 4
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      borrow_id: 1,
      date: 1,
      returned: 1,
      book_title: "$book.title",
      member_name: "$member.name"
    }
  }
])
{
  _id: ObjectId('6881bcc705832fb175c7c109'),
  borrow_id: 1,
  date: 2024-06-01T00:00:00.000Z,
  returned: true,
  book_title: 'The Alchemist',
  member_name: 'Ayesha Khan'
}
{
  _id: ObjectId('6881bcc705832fb175c7c109'),
  borrow_id: 1,
  date: 2024-06-01T00:00:00.000Z,
  returned: true,
  book_title: 'The Alchemist',
  member_name: 'Ayesha Khan'
}
{
  _id: ObjectId('6881bcc705832fb175c7c10a'),
  borrow_id: 2,
  date: 2024-06-15T00:00:00.000Z,
  returned: false,
  book_title: 'Sapiens',
  member_name: 'Ayesha Khan'
}
{
  _id: ObjectId('6881bcc705832fb175c7c10a'),
  borrow_id: 2,
  date: 2024-06-15T00:00:00.000Z,
  returned: false,
  book_title: 'Sapiens',
  member_name: 'Ayesha Khan'
}
{
  _id: ObjectId('6881bcc705832fb175c7c10b'),
  borrow_id: 3,
  date: 2024-06-20T00:00:00.000Z,
  returned: false,
  book_title: 'Atomic Habits',
  member_name: 'Rahul Verma'
}
{
  _id: ObjectId('6881bcc705832fb175c7c10b'),
  borrow_id: 3,
  date: 2024-06-20T00:00:00.000Z,
  returned: false,
  book_title: 'Atomic Habits',
  member_name: 'Rahul Verma'
}
{
  _id: ObjectId('6881bcc705832fb175c7c10c'),
  borrow_id: 4,
  date: 2024-06-22T00:00:00.000Z,
  returned: true,
  book_title: 'The Lean Startup',
  member_name: 'Nikita Rao'
}
{
  _id: ObjectId('6881bcc705832fb175c7c10c'),
  borrow_id: 4,
  date: 2024-06-22T00:00:00.000Z,
  returned: true,
  book_title: 'The Lean Startup',
  member_name: 'Nikita Rao'
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  { $match: { "book.title": "Sapiens" } },
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      _id: 0,
      member_name: "$member.name"
    }
  }
])
{
  member_name: 'Ayesha Khan'
}
{
  member_name: 'Ayesha Khan'
}
db.members.aggregate([
  {
    $lookup: {
      from: "borrowed",
      localField: "member_id",
      foreignField: "member_id",
      as: "borrowed_books"
    }
  }
])
{
  _id: ObjectId('687f1dee80ad1e4b5fed5432'),
  member_id: 1,
  name: 'Anjali Rao',
  age: 28,
  gender: 'Female',
  city: 'Mumbai',
  membership_type: 'Gold',
  borrowed_books: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5433'),
  member_id: 2,
  name: 'Rohan Mehta',
  age: 35,
  gender: 'Male',
  city: 'Delhi',
  membership_type: 'Silver',
  borrowed_books: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5434'),
  member_id: 3,
  name: 'Fatima Shaikh',
  age: 22,
  gender: 'Female',
  city: 'Hyderabad',
  membership_type: 'Platinum',
  borrowed_books: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5435'),
  member_id: 4,
  name: 'Vikram Das',
  age: 41,
  gender: 'Male',
  city: 'Bangalore',
  membership_type: 'Gold',
  borrowed_books: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5436'),
  member_id: 5,
  name: 'Neha Kapoor',
  age: 31,
  gender: 'Female',
  city: 'Pune',
  membership_type: 'Silver',
  borrowed_books: []
}
{
  _id: ObjectId('687f1ef180ad1e4b5fed5440'),
  member_id: 6,
  name: 'Arjun Patel',
  age: 29,
  gender: 'Male',
  city: 'Kolkata',
  membership_type: 'Silver',
  borrowed_books: []
}
{
  _id: ObjectId('6881bc9505832fb175c7c103'),
  member_id: 101,
  name: 'Ayesha Khan',
  joined_on: 2024-01-15T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881bcc705832fb175c7c109'),
      borrow_id: 1,
      member_id: 101,
      book_id: 201,
      date: 2024-06-01T00:00:00.000Z,
      returned: true
    },
    {
      _id: ObjectId('6881bcc705832fb175c7c10a'),
      borrow_id: 2,
      member_id: 101,
      book_id: 203,
      date: 2024-06-15T00:00:00.000Z,
      returned: false
    }
  ]
}
{
  _id: ObjectId('6881bc9505832fb175c7c104'),
  member_id: 102,
  name: 'Rahul Verma',
  joined_on: 2024-03-12T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881bcc705832fb175c7c10b'),
      borrow_id: 3,
      member_id: 102,
      book_id: 202,
      date: 2024-06-20T00:00:00.000Z,
      returned: false
    }
  ]
}
{
  _id: ObjectId('6881bc9505832fb175c7c105'),
  member_id: 103,
  name: 'Nikita Rao',
  joined_on: 2024-04-10T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881bcc705832fb175c7c10c'),
      borrow_id: 4,
      member_id: 103,
      book_id: 204,
      date: 2024-06-22T00:00:00.000Z,
      returned: true
    }
  ]
}
{
  _id: ObjectId('6881bcb905832fb175c7c106'),
  member_id: 101,
  name: 'Ayesha Khan',
  joined_on: 2024-01-15T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881bcc705832fb175c7c109'),
      borrow_id: 1,
      member_id: 101,
      book_id: 201,
      date: 2024-06-01T00:00:00.000Z,
      returned: true
    },
    {
      _id: ObjectId('6881bcc705832fb175c7c10a'),
      borrow_id: 2,
      member_id: 101,
      book_id: 203,
      date: 2024-06-15T00:00:00.000Z,
      returned: false
    }
  ]
}
{
  _id: ObjectId('6881bcb905832fb175c7c107'),
  member_id: 102,
  name: 'Rahul Verma',
  joined_on: 2024-03-12T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881bcc705832fb175c7c10b'),
      borrow_id: 3,
      member_id: 102,
      book_id: 202,
      date: 2024-06-20T00:00:00.000Z,
      returned: false
    }
  ]
}
{
  _id: ObjectId('6881bcb905832fb175c7c108'),
  member_id: 103,
  name: 'Nikita Rao',
  joined_on: 2024-04-10T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881bcc705832fb175c7c10c'),
      borrow_id: 4,
      member_id: 103,
      book_id: 204,
      date: 2024-06-22T00:00:00.000Z,
      returned: true
    }
  ]
}
db.borrowed.aggregate([
  { $match: { returned: false } },
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      _id: 0,
      member_name: "$member.name",
      book_id: 1,
      date: 1
    }
  }
])
{
  book_id: 203,
  date: 2024-06-15T00:00:00.000Z,
  member_name: 'Ayesha Khan'
}
{
  book_id: 203,
  date: 2024-06-15T00:00:00.000Z,
  member_name: 'Ayesha Khan'
}
{
  book_id: 202,
  date: 2024-06-20T00:00:00.000Z,
  member_name: 'Rahul Verma'
}
{
  book_id: 202,
  date: 2024-06-20T00:00:00.000Z,
  member_name: 'Rahul Verma'
}
db.borrowed.aggregate([
  {
    $group: {
      _id: "$book_id",
      borrow_count: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $project: {
      title: "$book.title",
      borrow_count: 1
    }
  }
])
{
  _id: 201,
  borrow_count: 1,
  title: 'The Alchemist'
}
{
  _id: 202,
  borrow_count: 1,
  title: 'Atomic Habits'
}
{
  _id: 204,
  borrow_count: 1,
  title: 'The Lean Startup'
}
{
  _id: 203,
  borrow_count: 1,
  title: 'Sapiens'
}
db.borrowed.aggregate([
  {
    $group: {
      _id: "$member_id",
      borrowed_count: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "members",
      localField: "_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      member_name: "$member.name",
      borrowed_count: 1
    }
  }
])
{
  _id: 101,
  borrowed_count: 2,
  member_name: 'Ayesha Khan'
}
{
  _id: 101,
  borrowed_count: 2,
  member_name: 'Ayesha Khan'
}
{
  _id: 103,
  borrowed_count: 1,
  member_name: 'Nikita Rao'
}
{
  _id: 103,
  borrowed_count: 1,
  member_name: 'Nikita Rao'
}
{
  _id: 102,
  borrowed_count: 1,
  member_name: 'Rahul Verma'
}
{
  _id: 102,
  borrowed_count: 1,
  member_name: 'Rahul Verma'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      total_books: { $sum: "$copies" }
    }
  },
  { $sort: { total_books: -1 } },
  { $limit: 1 }
])
{
  _id: 'Fiction',
  total_books: 10
}
db.borrowed.aggregate([
  { $group: { _id: "$book_id", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 2 },
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  { $project: { title: "$book.title", count: 1 } }
])
{
  _id: 203,
  count: 1,
  title: 'Sapiens'
}
{
  _id: 202,
  count: 1,
  title: 'Atomic Habits'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      avg_copies: { $avg: "$copies" }
    }
  }
])
{
  _id: 'Productivity',
  avg_copies: 4
}
{
  _id: 'Self-Help',
  avg_copies: 5
}
{
  _id: 'Fiction',
  avg_copies: 10
}
{
  _id: 'History',
  avg_copies: 7
}
{
  _id: 'Business',
  avg_copies: 3
}
db.borrowed.aggregate([
  { $match: { returned: false } },
  { $count: "currently_borrowed" }
])
{
  currently_borrowed: 2
}
db.members.insertOne({ member_id: 104, name: "Meena Das", joined_on: new Date("2024-07-10") })
{
  acknowledged: true,
  insertedId: ObjectId('6881bd6505832fb175c7c10d')
}
db.members.aggregate([
  {
    $lookup: {
      from: "borrowed",
      localField: "member_id",
      foreignField: "member_id",
      as: "borrowed"
    }
  },
  { $match: { borrowed: { $eq: [] } } }
])
{
  _id: ObjectId('687f1dee80ad1e4b5fed5432'),
  member_id: 1,
  name: 'Anjali Rao',
  age: 28,
  gender: 'Female',
  city: 'Mumbai',
  membership_type: 'Gold',
  borrowed: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5433'),
  member_id: 2,
  name: 'Rohan Mehta',
  age: 35,
  gender: 'Male',
  city: 'Delhi',
  membership_type: 'Silver',
  borrowed: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5434'),
  member_id: 3,
  name: 'Fatima Shaikh',
  age: 22,
  gender: 'Female',
  city: 'Hyderabad',
  membership_type: 'Platinum',
  borrowed: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5435'),
  member_id: 4,
  name: 'Vikram Das',
  age: 41,
  gender: 'Male',
  city: 'Bangalore',
  membership_type: 'Gold',
  borrowed: []
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5436'),
  member_id: 5,
  name: 'Neha Kapoor',
  age: 31,
  gender: 'Female',
  city: 'Pune',
  membership_type: 'Silver',
  borrowed: []
}
{
  _id: ObjectId('687f1ef180ad1e4b5fed5440'),
  member_id: 6,
  name: 'Arjun Patel',
  age: 29,
  gender: 'Male',
  city: 'Kolkata',
  membership_type: 'Silver',
  borrowed: []
}
{
  _id: ObjectId('6881bd6505832fb175c7c10d'),
  member_id: 104,
  name: 'Meena Das',
  joined_on: 2024-07-10T00:00:00.000Z,
  borrowed: []
}
db.books.aggregate([
  {
    $lookup: {
      from: "borrowed",
      localField: "book_id",
      foreignField: "book_id",
      as: "borrowed"
    }
  },
  { $match: { borrowed: { $eq: [] } } }
])
{
  _id: ObjectId('6881bc8605832fb175c7c102'),
  book_id: 205,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  copies: 4,
  borrowed: []
}
db.borrowed.aggregate([
  { $group: { _id: "$member_id", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } },
  {
    $lookup: {
      from: "members",
      localField: "_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  { $project: { member_name: "$member.name", count: 1 } }
])
{
  _id: 101,
  count: 2,
  member_name: 'Ayesha Khan'
}
{
  _id: 101,
  count: 2,
  member_name: 'Ayesha Khan'
}
db.borrowed.aggregate([
  {
    $group: {
      _id: { $month: "$date" },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      month: "$_id",
      borrowings: "$count",
      _id: 0
    }
  }
])
{
  month: 6,
  borrowings: 4
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  { $match: { "book.copies": { $lt: 5 } } }
])
{
  _id: ObjectId('6881bcc705832fb175c7c10c'),
  borrow_id: 4,
  member_id: 103,
  book_id: 204,
  date: 2024-06-22T00:00:00.000Z,
  returned: true,
  book: {
    _id: ObjectId('6881bc8605832fb175c7c101'),
    book_id: 204,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Business',
    copies: 3
  }
}
db.borrowed.aggregate([
  {
    $addFields: {
      due_date: { $add: ["$date", 1000 * 60 * 60 * 24 * 14] } // 14 days in ms
    }
  },
  {
    $match: {
      returned: false,
      due_date: { $lt: new Date() }
    }
  }
])
{
  _id: ObjectId('6881bcc705832fb175c7c10a'),
  borrow_id: 2,
  member_id: 101,
  book_id: 203,
  date: 2024-06-15T00:00:00.000Z,
  returned: false,
  due_date: 2024-06-29T00:00:00.000Z
}
{
  _id: ObjectId('6881bcc705832fb175c7c10b'),
  borrow_id: 3,
  member_id: 102,
  book_id: 202,
  date: 2024-06-20T00:00:00.000Z,
  returned: false,
  due_date: 2024-07-04T00:00:00.000Z
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $group: {
      _id: "$book.genre",
      total_borrowed: { $sum: 1 }
    }
  },
  { $sort: { total_borrowed: -1 } }
])
{
  _id: 'Fiction',
  total_borrowed: 1
}
{
  _id: 'History',
  total_borrowed: 1
}
{
  _id: 'Self-Help',
  total_borrowed: 1
}
{
  _id: 'Business',
  total_borrowed: 1
}


