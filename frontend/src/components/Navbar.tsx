import { useAuth } from "../context/AuthContext";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaBook, FaSignInAlt } from "react-icons/fa"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logout, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) return <p>Loading....</p>

    return (
        <nav className="bg-navbar fixed top-0 w-full text-white p-4 flex justify-between sm:justify-around items-center shadow-md">
            <Link to="/books">
                <h1 className="text-xl font-bold flex items-center gap-2 heading_text">
                    <FaBook /> Novel Nook
                </h1>
            </Link>


            {user ? (
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline">Welcome, {user.name}</span>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition cursor-pointer"
                    >
                        <FiLogOut />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            ) : location.pathname === "/books" || location.pathname.startsWith("/books") ? (
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-green-600 px-3 py-1 rounded-md hover:bg-green-700 transition"
                >
                    <FiLogIn />
                    Login
                </Link>
            ) : location.pathname === "/" ? (
                <Link
                    to="/register"
                    className="flex items-center gap-2 bg-[#3c6e71] px-3 py-1 rounded-md  hover:bg-green-700 transition"
                >
                    <FaSignInAlt />
                    Register
                </Link>
            ) : location.pathname === "/register" ? (
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-[#3c6e71] px-3 py-1 rounded-md hover:bg-green-700 transition"
                >
                    <FiLogIn />
                    LogIn
                </Link>
            ) : null
            }
        </nav>
    );
};

export default Navbar;
