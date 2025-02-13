# Express.js Product API

## 📌 Overview
This is an Express.js application that provides three endpoints for managing products. The API supports CRUD operations using MySQL as the database and integrates with [Fake Store API](https://fakestoreapi.com/products) for additional functionality.

## 🚀 Features
- **Create a Product** (`POST /v1/products`)
- **Update a Product** (`PUT /v1/products/:id`)
- **Fetch Products** (`GET /v1/products`)
- **Database Integration** with MySQL using Sequelize ORM
- **Data Validation** using Celebrate
- **Dependency Injection** using InversifyJS
- **Auto Mapping** for response transformation
- **Dockerized Application**

---

## 📥 Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+)
- **Docker & Docker Compose**
- **MySQL** (if not using Docker)

### Clone the Repository
```sh
git clone https://github.com/your-repo.git
cd your-repo
```

### Install Dependencies
```sh
npm install
```

---

## 🛠 Configuration
### Environment Variables
Create a `.env` file and configure the following:
```env
DB_HOST=db
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=products_db
DB_PORT=3306
```

---

## 📌 API Endpoints
### **1️⃣ Create a Product**
**URI:** `/v1/products`  
**Method:** `POST`  
**Body:**
```json
{
  "title": "test product",
  "price": 13.5,
  "description": "lorem ipsum set",
  "image": "https://i.pravatar.cc",
  "category": "electronics"
}
```
#### ✅ Requirements:
- Validate request body using **Celebrate**
- Allowed categories: `electronics`, `jewelry`, `men's clothing`, `women's clothing`
- Store in **MySQL (products table)**
- Send data to **Fake Store API**
- Return **mapped data using Auto Mapper**

---

### **2️⃣ Update a Product**
**URI:** `/v1/products/:id`  
**Method:** `PUT`  
**Body:** _(Same as Create Product)_
#### ✅ Requirements:
- Validate request body using **Celebrate**
- Update the product in **MySQL (products table)**
- Update the product in **Fake Store API**
- Return **mapped data using Auto Mapper**

---

### **3️⃣ Fetch Products**
**URI:** `/v1/products`  
**Method:** `GET`  
**Query Parameters:**
- `limit` → Number of products to return
- `category` → Filter by category
- `sort` → Sorting criteria
#### ✅ Requirements:
- Fetch products from **MySQL database**
- Support dynamic query filtering (`limit`, `category`, `sort`)
- Return **mapped data using Auto Mapper**

---

## 🐳 Running with Docker
### **1. Start MySQL & API**
```sh
docker-compose up --build
```


### **2. Stop the Application**
```sh
docker-compose down
```

---

## 🛠 Project Structure
```
/src
│── controllers/      # Express Route Handlers
│── services/         # Business Logic Layer
│── repositories/     # Database Layer
│── mappers/         # Auto Mapping Layer
│── validators/      # Celebrate Validation Schemas
│── config/          # Configuration Files
│── models/         # Sequelize Models
│── routes/        # Route Definitions
│── app.ts        # Express Application
│── server.ts       # Main Application Entry Point
```

---

## 📜 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Sequelize ORM)
- **Validation:** Celebrate (Joi)
- **Dependency Injection:** InversifyJS
- **Containerization:** Docker, Docker Compose

---

## 🛠 Development
### Run in Development Mode
```sh
npm run dev
```

---

## 📄 License
This project is licensed under the MIT License.

