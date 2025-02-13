# Backend for Novel Nook

This is the backend for **Novel Nook**, a book review platform. It is built using **Node.js** and **Express**, and interacts with a **MongoDB** database. The backend handles various API routes for user authentication, book reviews, and managing user profiles.

## Features

- **User Authentication**: Register, login, and logout functionality with JWT-based authentication.
- **Books API**: View full listing and Individual details of the book.
- **Reviews API**: Submit and view reviews for books.
- **User Profile**: View and update user profile information.

## Project Structure
├── src/ # Source code 
│ ├── api/ # API routes and controllers 
│ │ ├── bookRoutes.js # Routes for book-related actions 
│ │ ├── userRoutes.js # Routes for user authentication and profile 
│ │ ├── reviewRoutes.js # Routes for managing reviews 
│ │ ├── authRoutes.js # Routes for authentication (register/login/logout) 
│ ├── config/ # Configuration files (database, JWT secret) 
│ ├── controllers/ # Controller functions for API logic 
│ ├── models/ # Database models for Books, Users, and Reviews 
│ ├── middleware/ # Custom middleware for authentication and validation 
│ ├── utils/ # Helper functions 
│ ├── app.js # Express app setup 
│ ├── server.js # Server entry point 
├── package.json # Project dependencies and scripts 
├── .env # Environment variables (database connection, JWT secret) 
├── README.md # Project documentation
---


## API Endpoints

### **Books**
- `GET /api/books` - Retrieve a list of all books.
- `GET /api/books/:id` - Retrieve details of a specific book.

### **Users**
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and get a JWT token.
- `POST /api/auth/logout` - Logout and invalidate the JWT token.

### **Reviews**
- `GET /api/reviews/:bookId` - Retrieve reviews for a specific book.
- `POST /api/reviews/:bookId` - Add a new review for a book (Requires authentication).

## Admin
Admin API's are not completed yet

To include:
- `POST /api/books` - Add a new book (Admin only).
- `PUT /api/books/:id` - Update book information (Admin only).
- `DELETE /api/books/:id` - Delete a book (Admin only).
- `GET /api/users/profile` - Get profile of the users (Admin Only).
- `DELETE /api/reviews/:id` - Delete a review (Admin only).


## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/book-review-platform.git
cd backend
```

2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables** (Create a `.env` file in the root)
   ```env
    MONGO_URI=your_mongo_database_url
    JWT_SECRET=your_jwt_secret
   ```
4. **Run the development server**
   ```sh
   npm run dev
   ```