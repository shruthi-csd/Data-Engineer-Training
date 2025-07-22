db["Bookstore Management"].find()
use bookstoreDB

db.createCollection("books")
db.createCollection("customers")
db.createCollection("orders")
switched to db bookstoreDB
db.books.insertMany([
  {
    book_id: 101,
    title: "The AI Revolution",
    author: "Ray Kurzweil",
    genre: "Technology",
    price: 799,
    stock: 20
  },
  {
    book_id: 102,
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    genre: "Mystery",
    price: 450,
    stock: 15
  },
  {
    book_id: 103,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Self-Help",
    price: 599,
    stock: 25
  },
  {
    book_id: 104,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    price: 950,
    stock: 10
  },
  {
    book_id: 105,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    price: 500,
    stock: 30
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f11404b20ce285a8ca620'),
    '1': ObjectId('687f11404b20ce285a8ca621'),
    '2': ObjectId('687f11404b20ce285a8ca622'),
    '3': ObjectId('687f11404b20ce285a8ca623'),
    '4': ObjectId('687f11404b20ce285a8ca624')
  }
}
db.customers.insertMany([
  { customer_id: 201, name: "Amit Sharma", email: "amit@example.com", city: "Delhi" },
  { customer_id: 202, name: "Priya Reddy", email: "priya@example.com", city: "Hyderabad" },
  { customer_id: 203, name: "John D'Souza", email: "john@example.com", city: "Mumbai" },
  { customer_id: 204, name: "Meena Kumari", email: "meena@example.com", city: "Hyderabad" },
  { customer_id: 205, name: "Rahul Mehta", email: "rahul@example.com", city: "Bangalore" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f114a4b20ce285a8ca625'),
    '1': ObjectId('687f114a4b20ce285a8ca626'),
    '2': ObjectId('687f114a4b20ce285a8ca627'),
    '3': ObjectId('687f114a4b20ce285a8ca628'),
    '4': ObjectId('687f114a4b20ce285a8ca629')
  }
}
db.orders.insertMany([
  { order_id: 301, customer_id: 201, book_id: 101, order_date: ISODate("2024-01-10"), quantity: 1 },
  { order_id: 302, customer_id: 202, book_id: 103, order_date: ISODate("2024-03-05"), quantity: 2 },
  { order_id: 303, customer_id: 203, book_id: 102, order_date: ISODate("2023-12-20"), quantity: 1 },
  { order_id: 304, customer_id: 202, book_id: 105, order_date: ISODate("2024-04-01"), quantity: 3 },
  { order_id: 305, customer_id: 204, book_id: 104, order_date: ISODate("2024-05-12"), quantity: 1 },
  { order_id: 306, customer_id: 205, book_id: 101, order_date: ISODate("2024-06-15"), quantity: 2 },
  { order_id: 307, customer_id: 201, book_id: 105, order_date: ISODate("2023-01-15"), quantity: 1 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f11544b20ce285a8ca62a'),
    '1': ObjectId('687f11544b20ce285a8ca62b'),
    '2': ObjectId('687f11544b20ce285a8ca62c'),
    '3': ObjectId('687f11544b20ce285a8ca62d'),
    '4': ObjectId('687f11544b20ce285a8ca62e'),
    '5': ObjectId('687f11544b20ce285a8ca62f'),
    '6': ObjectId('687f11544b20ce285a8ca630')
  }
}
db.books.find({price:{$gt:500}})
{
  _id: ObjectId('687f11404b20ce285a8ca620'),
  book_id: 101,
  title: 'The AI Revolution',
  author: 'Ray Kurzweil',
  genre: 'Technology',
  price: 799,
  stock: 20
}
{
  _id: ObjectId('687f11404b20ce285a8ca622'),
  book_id: 103,
  title: 'The Power of Now',
  author: 'Eckhart Tolle',
  genre: 'Self-Help',
  price: 599,
  stock: 25
}
{
  _id: ObjectId('687f11404b20ce285a8ca623'),
  book_id: 104,
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  price: 950,
  stock: 10
}
db.customer.find({city:"Hyderabad"})
db.customers.find({ city: "Hyderabad" })
{
  _id: ObjectId('687f114a4b20ce285a8ca626'),
  customer_id: 202,
  name: 'Priya Reddy',
  email: 'priya@example.com',
  city: 'Hyderabad'
}
{
  _id: ObjectId('687f114a4b20ce285a8ca628'),
  customer_id: 204,
  name: 'Meena Kumari',
  email: 'meena@example.com',
  city: 'Hyderabad'
}
db.orders.find ({order_date:{$gt: ISODate("2023-01-01")}})
{
  _id: ObjectId('687f11544b20ce285a8ca62a'),
  order_id: 301,
  customer_id: 201,
  book_id: 101,
  order_date: 2024-01-10T00:00:00.000Z,
  quantity: 1
}
{
  _id: ObjectId('687f11544b20ce285a8ca62b'),
  order_id: 302,
  customer_id: 202,
  book_id: 103,
  order_date: 2024-03-05T00:00:00.000Z,
  quantity: 2
}
{
  _id: ObjectId('687f11544b20ce285a8ca62c'),
  order_id: 303,
  customer_id: 203,
  book_id: 102,
  order_date: 2023-12-20T00:00:00.000Z,
  quantity: 1
}
{
  _id: ObjectId('687f11544b20ce285a8ca62d'),
  order_id: 304,
  customer_id: 202,
  book_id: 105,
  order_date: 2024-04-01T00:00:00.000Z,
  quantity: 3
}
{
  _id: ObjectId('687f11544b20ce285a8ca62e'),
  order_id: 305,
  customer_id: 204,
  book_id: 104,
  order_date: 2024-05-12T00:00:00.000Z,
  quantity: 1
}
{
  _id: ObjectId('687f11544b20ce285a8ca62f'),
  order_id: 306,
  customer_id: 205,
  book_id: 101,
  order_date: 2024-06-15T00:00:00.000Z,
  quantity: 2
}
{
  _id: ObjectId('687f11544b20ce285a8ca630'),
  order_id: 307,
  customer_id: 201,
  book_id: 105,
  order_date: 2023-01-15T00:00:00.000Z,
  quantity: 1
}
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
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
    $project: {
      _id: 0,
      order_id: 1,
      customer_name: "$customer.name",
      book_title: "$book.title",
      quantity: 1,
      order_date: 1
    }
  }
])
{
  order_id: 301,
  order_date: 2024-01-10T00:00:00.000Z,
  quantity: 1,
  customer_name: 'Amit Sharma',
  book_title: 'The AI Revolution'
}
{
  order_id: 302,
  order_date: 2024-03-05T00:00:00.000Z,
  quantity: 2,
  customer_name: 'Priya Reddy',
  book_title: 'The Power of Now'
}
{
  order_id: 303,
  order_date: 2023-12-20T00:00:00.000Z,
  quantity: 1,
  customer_name: "John D'Souza",
  book_title: 'Murder on the Orient Express'
}
{
  order_id: 304,
  order_date: 2024-04-01T00:00:00.000Z,
  quantity: 3,
  customer_name: 'Priya Reddy',
  book_title: 'Atomic Habits'
}
{
  order_id: 305,
  order_date: 2024-05-12T00:00:00.000Z,
  quantity: 1,
  customer_name: 'Meena Kumari',
  book_title: 'Clean Code'
}
{
  order_id: 306,
  order_date: 2024-06-15T00:00:00.000Z,
  quantity: 2,
  customer_name: 'Rahul Mehta',
  book_title: 'The AI Revolution'
}
{
  order_id: 307,
  order_date: 2023-01-15T00:00:00.000Z,
  quantity: 1,
  customer_name: 'Amit Sharma',
  book_title: 'Atomic Habits'
}
db.orders.aggregate([
  {
    $group: {
      _id: "$book_id",
      total_quantity: { $sum: "$quantity" }
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
      _id: 0,
      book_title: "$book.title",
      total_quantity: 1
    }
  }
])
{
  total_quantity: 1,
  book_title: 'Murder on the Orient Express'
}
{
  total_quantity: 3,
  book_title: 'The AI Revolution'
}
{
  total_quantity: 1,
  book_title: 'Clean Code'
}
{
  total_quantity: 2,
  book_title: 'The Power of Now'
}
{
  total_quantity: 4,
  book_title: 'Atomic Habits'
}
db.orders.aggregate([
  {
    $group: {
      _id: "$customer_id",
      total_orders: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $project: {
      _id: 0,
      customer_name: "$customer.name",
      total_orders: 1
    }
  }
])
{
  total_orders: 1,
  customer_name: 'Rahul Mehta'
}
{
  total_orders: 2,
  customer_name: 'Amit Sharma'
}
{
  total_orders: 2,
  customer_name: 'Priya Reddy'
}
{
  total_orders: 1,
  customer_name: 'Meena Kumari'
}
{
  total_orders: 1,
  customer_name: "John D'Souza"
}
db.orders.aggregate([
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
      _id: "$book_id",
      book_title: { $first: "$book.title" },
      total_revenue: { $sum: { $multiply: ["$quantity", "$book.price"] } }
    }
  }
])
{
  _id: 105,
  book_title: 'Atomic Habits',
  total_revenue: 2000
}
{
  _id: 104,
  book_title: 'Clean Code',
  total_revenue: 950
}
{
  _id: 102,
  book_title: 'Murder on the Orient Express',
  total_revenue: 450
}
{
  _id: 101,
  book_title: 'The AI Revolution',
  total_revenue: 2397
}
{
  _id: 103,
  book_title: 'The Power of Now',
  total_revenue: 1198
}
db.orders.aggregate([
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
      _id: "$book_id",
      book_title: { $first: "$book.title" },
      total_revenue: { $sum: { $multiply: ["$quantity", "$book.price"] } }
    }
  },
  { $sort: { total_revenue: -1 } },
  { $limit: 1 }
])
{
  _id: 101,
  book_title: 'The AI Revolution',
  total_revenue: 2397
}
db.orders.aggregate([
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
      total_sold: { $sum: "$quantity" }
    }
  },
  {
    $project: {
      genre: "$_id",
      total_sold: 1,
      _id: 0
    }
  }
])
{
  total_sold: 1,
  genre: 'Programming'
}
{
  total_sold: 6,
  genre: 'Self-Help'
}
{
  total_sold: 1,
  genre: 'Mystery'
}
{
  total_sold: 3,
  genre: 'Technology'
}
db.orders.aggregate([
  {
    $group: {
      _id: { customer_id: "$customer_id", book_id: "$book_id" }
    }
  },
  {
    $group: {
      _id: "$_id.customer_id",
      unique_books: { $sum: 1 }
    }
  },
  { $match: { unique_books: { $gt: 2 } } },
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $project: {
      _id: 0,
      customer_name: "$customer.name",
      unique_books: 1
    }
  }
])