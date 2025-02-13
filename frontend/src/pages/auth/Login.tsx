import { useRef, useState } from "react";
import { loginUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { showToast } from "../../utils/toastUtils";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailRef?.current?.value || ""
        const password = passwordRef?.current?.value || ""

        try {
            const userData = await loginUser(email, password);
            setUser(userData.user);
            navigate("/books");
        } catch (err: any) {
            showToast(err.response?.data?.message || "Login failed", 'error')
        }
    };

    return (
        <div className="min-h-screen p-8 flex items-center justify-center bg-primary">
            <div className="w-full max-w-md p-10 sm:pb-16 bg-secondary shadow-md rounded-md">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" ref={emailRef}
                        className="w-full p-2  bg-primary text-black border rounded mb-3 outline-none"
                        required
                    />
                    <div className="relative">
                        <input name="password" placeholder="Password" ref={passwordRef}                   
                            type={showPassword ? "text" : "password"}                            
                            className="w-full p-2 bg-primary text-black border rounded mb-3 outline-none pr-10"
                        />
                        <button type="button"                                                    
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-5 transform -translate-y-1/2 text-black"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="btn_style w-full cursor-pointer"
                    >
                        Login
                    </button>

                </form>
                <p className="text-center mt-3 text-sm">
                    Don't have an account? <Link to="/register" className="heading_text font-bold hover:text-[#e85cd3]">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
