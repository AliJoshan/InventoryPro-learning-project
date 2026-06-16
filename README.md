# InventoryPro

A full-stack inventory management application built with **React, Express, MongoDB, and JWT authentication**. This project was created as a learning experience to practice backend development concepts while building a complete application from scratch.

## Features

### Authentication

* User registration and login
* JWT-based authentication
* Protected routes
* Persistent login using stored tokens
* Logout functionality

### Product Management

* Create new products
* View all products
* Edit existing products
* Delete products with confirmation modal
* Instant UI updates after CRUD operations

### User Dashboard

* Profile information
* Account statistics
* Product overview
* Responsive dashboard layout

### User Experience Improvements

* Toast notifications for feedback
* Delete confirmation modal
* Edit product modal
* Loading states and skeleton screens
* Improved error handling
* Responsive and polished UI using Tailwind CSS

## Tech Stack

### Frontend

* React
* React Router
* Context API
* Tailwind CSS
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcrypt

## Project Structure

```
InventoryPro/
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/inventorypro.git
cd inventorypro
```

## Backend Setup

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm run dev
```

## Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will typically run on:

```
http://localhost:5173
```

## What I Learned

This project helped me gain hands-on experience with:

* Building REST APIs using Express
* Designing MongoDB models with Mongoose
* Implementing JWT authentication
* Managing authentication state with Context API
* Creating protected routes in React
* Performing CRUD operations end-to-end
* Handling asynchronous data fetching
* Improving user experience with modals, toasts, and loading states
* Organizing and refactoring React applications into reusable components


This project was built for educational purposes and personal learning.
