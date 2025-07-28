import json


with open('products.json', 'r') as f:
    products = json.load(f)


for product in products:
    product['price'] = round(product['price'] * 1.10, 2)


with open('products_updated.json', 'w') as f:
    json.dump(products, f, indent=4)

print("Q9 Done! 'products_updated.json' created with updated prices.")
