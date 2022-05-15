// README.md

# MERCHAT SERVICE

### Introduction

Merchant service is an Restfull api that enable users add product or data and menghubungkan data users pada database

# **MERCHANT SERVICE ARCHITECTURE**

![architecture diagram](./diagram%26erd_image/architecture_diagram.png)

An API in merchant services allows the merchant to use more comprehensive credit card processing software to build, connect, and access certain parts of their payment processing software in an effort to give them complete control.

# **ERD**

![ERD](./diagram%26erd_image/ERD.png)
Database is absolutely an integral part of software systems. To fully utilize ER Diagram in database engineering guarantees you to produce high-quality database design to use in database creation, management, and maintenance. An ER model also provides a means for communication.

### Merchant Server Features

- Users can signup and login to their accounts
- Public (non-authenticated) users can access all causes on the platform
- Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created.

# API LIST

# Users

- ## User object

{
id: integer
username: string
email: string
created_at: datetime(iso 8601)
updated_at: datetime(iso 8601)
}

# GET /users

Returns all users in the system.

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json

- **Success Response:**
- **Code:** 200
- **Content:**

{
users: [
{<user_id>},
{<user_password>},
{<user_name>}
{<user_join_date>}
{<user_phone_number>}
]
}

# GET /users/:id

Returns the specified user.

- **URL Params**
  Required: id=[integer]
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <OAuth Token>
- **Success Response:**
- **Code:** 200
  **Content:**
  {
  users: [
  {<user_id>},
  {<user_name>},
  {<user_join_date>},
  {<user_phone_number>},
  ]
  }

- **Error Response:**
- **Code:** 404
- **Content:** { error : ""ID User Not Found"" }
  OR
- **Code:** 401
- **Content:** { err }

# POST /users

Creates a new User and returns the new object.

- **URL Params**
  None
- **Headers**
  Content-Type: application/json
- **Data Params**
  {
  password: string,
  name: string,
  address: string,
  join_date: date,
  phone_number: integer
  }
- **Success Response:**
- **Code:** 200
- **Content:** {
  [
  { <success: 1> }
  { <data: results> }
  ]
  }

# DELETE /users/:id

Deletes the specified user.

- **URL Params**
  Required: id=[integer]
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Authorization:** Bearer <OAuth Token>
- **Success Response:**
- **Code:** 204
- **Error Response:**
- **Code:** 404
- **Content:** { error : "record not found" }
  OR
- **Code:** 401
- **Content:** { error }

#Products

- **Product object**
  {
  id: integer
  name: string
  cost: float(2)
  available_quantity: integer
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
  }

# GET /products

Returns all products in the system.

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Authorization:** Bearer <OAuth Token>
- **Success Response:**
- **Code:** 200
  **Content:**
  {
  products: [
  {<product_id>},
  {<product_name>},
  {<product_quantity>}
  {<product_price>}
  ]
  }

# GET /products/:id

Returns the specified product.

- **URL Params**
  Required: id=[integer]
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <OAuth Token>
- **Success Response:**
- **Code:** 200
- **Content:**{
  [
  { <product_id> }
  { <product_name> }
  { <product_quantity> }
  { <product_price> }
  ]
  }
- **Error Response:**
- **Code:** 404
- **Content:** { error : "Product not found" }
  OR
- **Code:** 401
- **Content:** { error : error : "You are unauthorized to make this request." }

# POST /products

Creates a new Product and returns the new object.

- **URL Params**
  None
- **Data Params**
  {
  name: string
  quantity: integer
  price: integer
  }
- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
- **Content:** { <product_object> }

# PATCH /products

Updates fields on the specified product and returns the updated object.

- **URL Params**
  Required: none
  Data Params
  {
  id : int
  name: string
  cost: float(2)
  available_quantity: integer
  }
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <OAuth Token>
- **Success Response:**
- **Code:** 200
- **Content:** { <product_object> }
- **Error Response:**
- **Code:** 404
- **Content:** { error : "Product not found" }
  OR
- **Code:** 401
- **ontent:** { error : error : "failed to update product" }

# DELETE /products/

Deletes the specified product.

- **URL Params**
  Required: none
  Data Params
  {
  id : int
  }
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <OAuth Token>
- **Success Response:**
  **Code:** 204
- **Error Response:**
- **Code:** 404
- **Content:** { error : ""record not found"" }
  OR
- **Code:** 401
  Content: { error : error : "You are unauthorized to make this request." }
