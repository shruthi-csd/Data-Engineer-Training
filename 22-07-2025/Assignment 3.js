use companyDB
switched to db companyDB
db["retail store inventory"].find()
db.products.insertMany([
{ product_id: 101, name: "Laptop", category: "Electronics", price: 55000, stock: 30
},
{ product_id: 102, name: "Mobile", category: "Electronics", price: 25000, stock: 50
},
{ product_id: 103, name: "Chair", category: "Furniture", price: 3000, stock: 100 },
{ product_id: 104, name: "Desk", category: "Furniture", price: 7000, stock: 40 },
{ product_id: 105, name: "Book", category: "Stationery", price: 250, stock: 200 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1cd5a6094ee152df5582'),
    '1': ObjectId('687f1cd5a6094ee152df5583'),
    '2': ObjectId('687f1cd5a6094ee152df5584'),
    '3': ObjectId('687f1cd5a6094ee152df5585'),
    '4': ObjectId('687f1cd5a6094ee152df5586')
  }
}
db.sales.insertMany([
{ sale_id: 1, product_id: 101, quantity: 2, date: new Date("2024-08-10"), customer:
"Ravi" },
{ sale_id: 2, product_id: 102, quantity: 3, date: new Date("2024-08-12"), customer:
"Ayesha" },
{ sale_id: 3, product_id: 103, quantity: 5, date: new Date("2024-08-14"), customer:
"Ravi" },
{ sale_id: 4, product_id: 104, quantity: 1, date: new Date("2024-08-14"), customer:
"John" },
{ sale_id: 5, product_id: 105, quantity: 10, date: new Date("2024-08-15"), customer:
"Meena" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1ce5a6094ee152df5587'),
    '1': ObjectId('687f1ce5a6094ee152df5588'),
    '2': ObjectId('687f1ce6a6094ee152df5589'),
    '3': ObjectId('687f1ce6a6094ee152df558a'),
    '4': ObjectId('687f1ce6a6094ee152df558b')
  }
}
db.products.find({ category: "Electronics" })
{
  _id: ObjectId('687f1cd5a6094ee152df5582'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}
{
  _id: ObjectId('687f1cd5a6094ee152df5583'),
  product_id: 102,
  name: 'Mobile',
  category: 'Electronics',
  price: 25000,
  stock: 50
}
db.sales.find({ customer: "Ravi" })
{
  _id: ObjectId('687f1ce5a6094ee152df5587'),
  sale_id: 1,
  product_id: 101,
  quantity: 2,
  date: 2024-08-10T00:00:00.000Z,
  customer: 'Ravi'
}
{
  _id: ObjectId('687f1ce6a6094ee152df5589'),
  sale_id: 3,
  product_id: 103,
  quantity: 5,
  date: 2024-08-14T00:00:00.000Z,
  customer: 'Ravi'
}
db.products.find({ price: { $gt: 5000 } })
{
  _id: ObjectId('687f1cd5a6094ee152df5582'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}
{
  _id: ObjectId('687f1cd5a6094ee152df5583'),
  product_id: 102,
  name: 'Mobile',
  category: 'Electronics',
  price: 25000,
  stock: 50
}
{
  _id: ObjectId('687f1cd5a6094ee152df5585'),
  product_id: 104,
  name: 'Desk',
  category: 'Furniture',
  price: 7000,
  stock: 40
}
db.products.find({ stock: { $lt: 50 } })
{
  _id: ObjectId('687f1cd5a6094ee152df5582'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}
{
  _id: ObjectId('687f1cd5a6094ee152df5585'),
  product_id: 104,
  name: 'Desk',
  category: 'Furniture',
  price: 7000,
  stock: 40
}
db.sales.find({ date: new Date("2024-08-14") })
{
  _id: ObjectId('687f1ce6a6094ee152df5589'),
  sale_id: 3,
  product_id: 103,
  quantity: 5,
  date: 2024-08-14T00:00:00.000Z,
  customer: 'Ravi'
}
{
  _id: ObjectId('687f1ce6a6094ee152df558a'),
  sale_id: 4,
  product_id: 104,
  quantity: 1,
  date: 2024-08-14T00:00:00.000Z,
  customer: 'John'
}
db.sales.aggregate([
  {
    $group: {
      _id: "$product_id",
      total_quantity_sold: { $sum: "$quantity" }
    }
  },
  {
    $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      product_name: "$product.name",
      total_quantity_sold: 1,
      _id: 0
    }
  }
])
{
  total_quantity_sold: 1,
  product_name: 'Desk'
}
{
  total_quantity_sold: 5,
  product_name: 'Chair'
}
{
  total_quantity_sold: 10,
  product_name: 'Book'
}
{
  total_quantity_sold: 3,
  product_name: 'Mobile'
}
{
  total_quantity_sold: 2,
  product_name: 'Laptop'
}
db.sales.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $group: {
      _id: "$product_id",
      product_name: { $first: "$product.name" },
      total_revenue: { $sum: { $multiply: ["$quantity", "$product.price"] } }
    }
  }
])
{
  _id: 104,
  product_name: 'Desk',
  total_revenue: 7000
}
{
  _id: 105,
  product_name: 'Book',
  total_revenue: 2500
}
{
  _id: 102,
  product_name: 'Mobile',
  total_revenue: 75000
}
{
  _id: 101,
  product_name: 'Laptop',
  total_revenue: 110000
}
{
  _id: 103,
  product_name: 'Chair',
  total_revenue: 15000
}
db.sales.find({ quantity: { $gt: 3 } }, { customer: 1, quantity: 1, _id: 0 })
{
  quantity: 5,
  customer: 'Ravi'
}
{
  quantity: 10,
  customer: 'Meena'
}
db.products.find().sort({ stock: -1 })
{
  _id: ObjectId('687f1cd5a6094ee152df5586'),
  product_id: 105,
  name: 'Book',
  category: 'Stationery',
  price: 250,
  stock: 200
}
{
  _id: ObjectId('687f1cd5a6094ee152df5584'),
  product_id: 103,
  name: 'Chair',
  category: 'Furniture',
  price: 3000,
  stock: 100
}
{
  _id: ObjectId('687f1cd5a6094ee152df5583'),
  product_id: 102,
  name: 'Mobile',
  category: 'Electronics',
  price: 25000,
  stock: 50
}
{
  _id: ObjectId('687f1cd5a6094ee152df5585'),
  product_id: 104,
  name: 'Desk',
  category: 'Furniture',
  price: 7000,
  stock: 40
}
{
  _id: ObjectId('687f1cd5a6094ee152df5582'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}
db.sales.aggregate([
  {
    $group: {
      _id: "$product_id",
      total_quantity_sold: { $sum: "$quantity" }
    }
  },
  {
    $sort: { total_quantity_sold: -1 }
  },
  { $limit: 2 },
  {
    $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      product_name: "$product.name",
      total_quantity_sold: 1,
      _id: 0
    }
  }
])
{
  total_quantity_sold: 10,
  product_name: 'Book'
}
