import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-4 mt-4">
                <Link to="/admin/books" className="btn_style">Manage Books</Link>
                <Link to="/admin/users" className="btn_style">Manage Users</Link>
                <Link to="/admin/reviews" className="btn_style">Manage Reviews</Link>
            </div>
        </div>
    );
}

export default AdminDashboard;
