db["E-commerce store"].find()
db.products.insertMany([
  { product_id: 1001, name: "Wireless Mouse", category: "Electronics", price: 750, stock: 120 },
  { product_id: 1002, name: "Bluetooth Speaker", category: "Electronics", price: 2200, stock: 80 },
  { product_id: 1003, name: "Yoga Mat", category: "Fitness", price: 599, stock: 150 },
  { product_id: 1004, name: "Office Chair", category: "Furniture", price: 7500, stock: 40 },
  { product_id: 1005, name: "Running Shoes", category: "Footwear", price: 3500, stock: 60 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881bac9acbe19d255264b5b'),
    '1': ObjectId('6881bac9acbe19d255264b5c'),
    '2': ObjectId('6881bac9acbe19d255264b5d'),
    '3': ObjectId('6881bac9acbe19d255264b5e'),
    '4': ObjectId('6881bac9acbe19d255264b5f')
  }
}
db.orders.insertMany([
  { order_id: 5001, customer: "Ravi Shah", product_id: 1001, quantity: 2, order_date: new Date("2024-07-01") },
  { order_id: 5002, customer: "Sneha Mehta", product_id: 1002, quantity: 1, order_date: new Date("2024-07-02") },
  { order_id: 5003, customer: "Arjun Verma", product_id: 1003, quantity: 3, order_date: new Date("2024-07-03") },
  { order_id: 5004, customer: "Neha Iyer", product_id: 1001, quantity: 1, order_date: new Date("2024-07-04") },
  { order_id: 5005, customer: "Mohit Jain", product_id: 1005, quantity: 2, order_date: new Date("2024-07-05") }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881baf2acbe19d255264b60'),
    '1': ObjectId('6881baf2acbe19d255264b61'),
    '2': ObjectId('6881baf2acbe19d255264b62'),
    '3': ObjectId('6881baf2acbe19d255264b63'),
    '4': ObjectId('6881baf2acbe19d255264b64')
  }
}
db.products.find({ category: "Electronics" });
{
  _id: ObjectId('687ba0012c9ab6db12f4f226'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 10
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f227'),
  product_id: 102,
  name: 'Mouse',
  category: 'Electronics',
  price: 700,
  stock: 50
}
{
  _id: ObjectId('6881bac9acbe19d255264b5b'),
  product_id: 1001,
  name: 'Wireless Mouse',
  category: 'Electronics',
  price: 750,
  stock: 120
}
{
  _id: ObjectId('6881bac9acbe19d255264b5c'),
  product_id: 1002,
  name: 'Bluetooth Speaker',
  category: 'Electronics',
  price: 2200,
  stock: 80
}
db.orders.find({ customer: "Ravi Shah" });
{
  _id: ObjectId('6881baf2acbe19d255264b60'),
  order_id: 5001,
  customer: 'Ravi Shah',
  product_id: 1001,
  quantity: 2,
  order_date: 2024-07-01T00:00:00.000Z
}
db.orders.find({ order_date: { $gt: new Date("2024-07-02") } });
{
  _id: ObjectId('6881baf2acbe19d255264b62'),
  order_id: 5003,
  customer: 'Arjun Verma',
  product_id: 1003,
  quantity: 3,
  order_date: 2024-07-03T00:00:00.000Z
}
{
  _id: ObjectId('6881baf2acbe19d255264b63'),
  order_id: 5004,
  customer: 'Neha Iyer',
  product_id: 1001,
  quantity: 1,
  order_date: 2024-07-04T00:00:00.000Z
}
{
  _id: ObjectId('6881baf2acbe19d255264b64'),
  order_id: 5005,
  customer: 'Mohit Jain',
  product_id: 1005,
  quantity: 2,
  order_date: 2024-07-05T00:00:00.000Z
}
db.products.find({ stock: { $lt: 50 } });
{
  _id: ObjectId('687ba0012c9ab6db12f4f226'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 10
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f228'),
  product_id: 103,
  name: 'Office Chair',
  category: 'Furniture',
  price: 4500,
  stock: 5
}
{
  _id: ObjectId('6881bac9acbe19d255264b5e'),
  product_id: 1004,
  name: 'Office Chair',
  category: 'Furniture',
  price: 7500,
  stock: 40
}
db.products.find({ price: { $gt: 2000 } });
{
  _id: ObjectId('687ba0012c9ab6db12f4f226'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 10
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f228'),
  product_id: 103,
  name: 'Office Chair',
  category: 'Furniture',
  price: 4500,
  stock: 5
}
{
  _id: ObjectId('6881bac9acbe19d255264b5c'),
  product_id: 1002,
  name: 'Bluetooth Speaker',
  category: 'Electronics',
  price: 2200,
  stock: 80
}
{
  _id: ObjectId('6881bac9acbe19d255264b5e'),
  product_id: 1004,
  name: 'Office Chair',
  category: 'Furniture',
  price: 7500,
  stock: 40
}
{
  _id: ObjectId('6881bac9acbe19d255264b5f'),
  product_id: 1005,
  name: 'Running Shoes',
  category: 'Footwear',
  price: 3500,
  stock: 60
}
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $unwind: "$product_info" },
  {
    $project: {
      order_id: 1,
      customer: 1,
      product: "$product_info.name",
      price: "$product_info.price",
      quantity: 1,
      order_date: 1
    }
  }
]);
{
  _id: ObjectId('6881baf2acbe19d255264b60'),
  order_id: 5001,
  customer: 'Ravi Shah',
  quantity: 2,
  order_date: 2024-07-01T00:00:00.000Z,
  product: 'Wireless Mouse',
  price: 750
}
{
  _id: ObjectId('6881baf2acbe19d255264b61'),
  order_id: 5002,
  customer: 'Sneha Mehta',
  quantity: 1,
  order_date: 2024-07-02T00:00:00.000Z,
  product: 'Bluetooth Speaker',
  price: 2200
}
{
  _id: ObjectId('6881baf2acbe19d255264b62'),
  order_id: 5003,
  customer: 'Arjun Verma',
  quantity: 3,
  order_date: 2024-07-03T00:00:00.000Z,
  product: 'Yoga Mat',
  price: 599
}
{
  _id: ObjectId('6881baf2acbe19d255264b63'),
  order_id: 5004,
  customer: 'Neha Iyer',
  quantity: 1,
  order_date: 2024-07-04T00:00:00.000Z,
  product: 'Wireless Mouse',
  price: 750
}
{
  _id: ObjectId('6881baf2acbe19d255264b64'),
  order_id: 5005,
  customer: 'Mohit Jain',
  quantity: 2,
  order_date: 2024-07-05T00:00:00.000Z,
  product: 'Running Shoes',
  price: 3500
}
db.orders.aggregate([
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
      _id: "$customer",
      total_spent: { $sum: { $multiply: ["$quantity", "$product.price"] } }
    }
  }
]);
{
  _id: 'Ravi Shah',
  total_spent: 1500
}
{
  _id: 'Sneha Mehta',
  total_spent: 2200
}
{
  _id: 'Arjun Verma',
  total_spent: 1797
}
{
  _id: 'Neha Iyer',
  total_spent: 750
}
{
  _id: 'Mohit Jain',
  total_spent: 7000
}
db.orders.aggregate([
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
    $project: {
      order_id: 1,
      customer: 1,
      category: "$product.category",
      order_date: 1
    }
  }
]);
{
  _id: ObjectId('6881baf2acbe19d255264b60'),
  order_id: 5001,
  customer: 'Ravi Shah',
  order_date: 2024-07-01T00:00:00.000Z,
  category: 'Electronics'
}
{
  _id: ObjectId('6881baf2acbe19d255264b61'),
  order_id: 5002,
  customer: 'Sneha Mehta',
  order_date: 2024-07-02T00:00:00.000Z,
  category: 'Electronics'
}
{
  _id: ObjectId('6881baf2acbe19d255264b62'),
  order_id: 5003,
  customer: 'Arjun Verma',
  order_date: 2024-07-03T00:00:00.000Z,
  category: 'Fitness'
}
{
  _id: ObjectId('6881baf2acbe19d255264b63'),
  order_id: 5004,
  customer: 'Neha Iyer',
  order_date: 2024-07-04T00:00:00.000Z,
  category: 'Electronics'
}
{
  _id: ObjectId('6881baf2acbe19d255264b64'),
  order_id: 5005,
  customer: 'Mohit Jain',
  order_date: 2024-07-05T00:00:00.000Z,
  category: 'Footwear'
}
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  { $match: { "product.category": "Fitness" } },
  {
    $group: {
      _id: "$customer"
    }
  }
]);
{
  _id: 'Arjun Verma'
}
db.orders.aggregate([
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
      _id: "$product.category",
      total_sales: { $sum: { $multiply: ["$quantity", "$product.price"] } }
    }
  }
]);
{
  _id: 'Electronics',
  total_sales: 4450
}
{
  _id: 'Fitness',
  total_sales: 1797
}
{
  _id: 'Footwear',
  total_sales: 7000
}
db.orders.aggregate([
  {
    $group: {
      _id: "$product_id",
      total_units_sold: { $sum: "$quantity" }
    }
  }
]);
{
  _id: 1005,
  total_units_sold: 2
}
{
  _id: 1002,
  total_units_sold: 1
}
{
  _id: 1003,
  total_units_sold: 3
}
{
  _id: 1001,
  total_units_sold: 3
}
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      avg_price: { $avg: "$price" }
    }
  }
]);
{
  _id: 'Electronics',
  avg_price: 14662.5
}
{
  _id: 'Stationery',
  avg_price: 50
}
{
  _id: 'Fitness',
  avg_price: 599
}
{
  _id: 'Furniture',
  avg_price: 6000
}
{
  _id: 'Kitchen',
  avg_price: 250
}
{
  _id: 'Footwear',
  avg_price: 3500
}
db.orders.aggregate([
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
    $project: {
      customer: 1,
      total: { $multiply: ["$quantity", "$product.price"] }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
{
  _id: ObjectId('6881baf2acbe19d255264b64'),
  customer: 'Mohit Jain',
  total: 7000
}
db.orders.aggregate([
  {
    $group: {
      _id: "$product_id",
      order_count: { $sum: 1 }
    }
  },
  { $sort: { order_count: -1 } },
  { $limit: 3 }
]);
{
  _id: 1001,
  order_count: 2
}
{
  _id: 1002,
  order_count: 1
}
{
  _id: 1003,
  order_count: 1
}
db.orders.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$order_date" } },
      order_count: { $sum: 1 }
    }
  },
  { $sort: { order_count: -1 } },
  { $limit: 1 }
]);
{
  _id: '2024-07-03',
  order_count: 1
}
// Simulate customer collection
db.customers.insertMany([
  { name: "Ravi Shah" },
  { name: "Sneha Mehta" },
  { name: "Arjun Verma" },
  { name: "Neha Iyer" },
  { name: "Mohit Jain" },
  { name: "Priya Reddy" } // hasn't ordered
]);

// Find customers without orders
db.customers.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "name",
      foreignField: "customer",
      as: "orders"
    }
  },
  { $match: { orders: { $eq: [] } } }
]);
{
  _id: ObjectId('6881bb9bacbe19d255264b6a'),
  name: 'Priya Reddy',
  orders: []
}
// Add extra order for Ravi Shah
db.orders.insertOne({
  order_id: 5006,
  customer: "Ravi Shah",
  product_id: 1002,
  quantity: 1,
  order_date: new Date("2024-07-06")
});

db.orders.aggregate([
  {
    $group: {
      _id: "$customer",
      order_count: { $sum: 1 }
    }
  },
  { $match: { order_count: { $gt: 1 } } }
]);
{
  _id: 'Ravi Shah',
  order_count: 2
}
db.products.find({
  product_id: { $nin: db.orders.distinct("product_id") }
});
{
  _id: ObjectId('687ba0012c9ab6db12f4f226'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 10
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f227'),
  product_id: 102,
  name: 'Mouse',
  category: 'Electronics',
  price: 700,
  stock: 50
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f228'),
  product_id: 103,
  name: 'Office Chair',
  category: 'Furniture',
  price: 4500,
  stock: 5
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f229'),
  product_id: 104,
  name: 'Notebook',
  category: 'Stationery',
  price: 50,
  stock: 300
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f22a'),
  product_id: 105,
  name: 'Water Bottle',
  category: 'Kitchen',
  price: 250,
  stock: 100
}
{
  _id: ObjectId('6881bac9acbe19d255264b5e'),
  product_id: 1004,
  name: 'Office Chair',
  category: 'Furniture',
  price: 7500,
  stock: 40
}
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  { $match: { "product.stock": { $lt: 100 } } },
  { $group: { _id: "$customer" } }
]);
{
  _id: 'Ravi Shah'
}
{
  _id: 'Mohit Jain'
}
{
  _id: 'Sneha Mehta'
}
db.products.aggregate([
  {
    $group: {
      _id: null,
      total_inventory_value: { $sum: { $multiply: ["$price", "$stock"] } }
    }
  }
]);
