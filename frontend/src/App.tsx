import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookList from "./pages/user/BookList";
import BookDetails from "./pages/user/BookDetails";
import AddReview from "./pages/user/AddReview";
import Register from "./pages/auth/Register";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/auth/Login";
import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
// import ManageBooks from "./pages/admin/ManageBooks";

const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/books" /> : <Login />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/register" element={user ? <Navigate to="/books" /> : <Register />} />
        <Route path="/books" element={<BookList />} />
        <Route element={<PrivateRoute />}>
          <Route path="/reviews/:bookId" element={<AddReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;