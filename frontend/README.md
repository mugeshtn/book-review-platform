# Novel Nook - Frontend

## 📌 Overview
Novel Nook is a book review platform built using Vite + React with TypeScript. This frontend interacts with the backend API to display books, reviews, and user profiles.

## 🚀 Features
- Browse books and view details
- Add reviews (requires authentication)
- User authentication (login, logout, register)
- Responsive UI with Tailwind CSS
- API integration using React Query

## 🛠️ Tech Stack
- **Frontend**: React (Vite) + TypeScript
- **State Management**: React Query
- **Styling**: Tailwind CSS
- **Routing**: React Router

## 📂 Folder Structure
```
frontend/
│── src/
│   ├── api/            # API calls
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── context/        # Auth & global state management
│   ├── utils/          # Helper functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│── public/             # Static assets
│── package.json        # Dependencies & scripts
│── tailwind.config.js  # Tailwind setup
│── vite.config.ts      # Vite configuration
```

## 🔧 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/book-review-platform.git
   cd book-review-platform/frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables** (Create a `.env` file in the root)
   ```env
   VITE_API_BASE_URL=http://localhost:8001/api
   ```
4. **Run the development server**
   ```sh
   npm run dev
   ```
5. **Open in browser**
   Navigate to `http://localhost:5173/`

## 🔗 API Endpoints Used
- `GET /api/books` - Fetch all books
- `GET /api/books/:id` - Fetch book details
- `GET /api/reviews/:bookId` - Fetch reviews for a book
- `POST /api/reviews/:bookId` - Add a new review
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - Logout

---

## Admin Page
    The Admin Page is not created yet and will be added soon.

**Planned Features:**
- Add, edit, or delete books
- Manage user roles and permissions
- Delete inappropriate reviews

**Access:**
- The Admin Page will be accessible at /admin.
- Only authenticated admin users will have access.
- Role-based access control will be implemented to ensure restricted access.

