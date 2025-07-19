db["products"].find()
db.products.insertMany([
  { product_id: 101, name: "Laptop", category: "Electronics", price: 55000, stock: 10 },
  { product_id: 102, name: "Mouse", category: "Electronics", price: 700, stock: 50 },
  { product_id: 103, name: "Office Chair", category: "Furniture", price: 4500, stock: 5 },
  { product_id: 104, name: "Notebook", category: "Stationery", price: 50, stock: 300 },
  { product_id: 105, name: "Water Bottle", category: "Kitchen", price: 250, stock: 100 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687ba0012c9ab6db12f4f226'),
    '1': ObjectId('687ba0012c9ab6db12f4f227'),
    '2': ObjectId('687ba0012c9ab6db12f4f228'),
    '3': ObjectId('687ba0012c9ab6db12f4f229'),
    '4': ObjectId('687ba0012c9ab6db12f4f22a')
  }
}
db.products.find().pretty()
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
db.products.find({ category: { $ne: "Electronics" } })
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
db.products.find({ price: { $gt: 1000 } })
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
db.products.find({ stock: { $lt: 50 } })
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
db.products.find({ category: { $in: ["Furniture", "Kitchen"] } })
{
  _id: ObjectId('687ba0012c9ab6db12f4f228'),
  product_id: 103,
  name: 'Office Chair',
  category: 'Furniture',
  price: 4500,
  stock: 5
}
{
  _id: ObjectId('687ba0012c9ab6db12f4f22a'),
  product_id: 105,
  name: 'Water Bottle',
  category: 'Kitchen',
  price: 250,
  stock: 100
}
db.products.find({ stock: { $gte: 10, $lte: 100 } })
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
  _id: ObjectId('687ba0012c9ab6db12f4f22a'),
  product_id: 105,
  name: 'Water Bottle',
  category: 'Kitchen',
  price: 250,
  stock: 100
}
db.products.find({ price: { $ne: 700 } })
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
db.products.find({ name: { $regex: /^N/ } })
{
  _id: ObjectId('687ba0012c9ab6db12f4f229'),
  product_id: 104,
  name: 'Notebook',
  category: 'Stationery',
  price: 50,
  stock: 300
}
db.products.find({ stock: { $lte: 5 } })
{
  _id: ObjectId('687ba0012c9ab6db12f4f228'),
  product_id: 103,
  name: 'Office Chair',
  category: 'Furniture',
  price: 4500,
  stock: 5
}
db.products.find({ category: { $nin: ["Stationery", "Kitchen"] } })
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
db.products.findOne({ category: { $ne: "Furniture" } })
