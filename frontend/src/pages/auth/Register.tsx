import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import * as React from "react";
import { showToast } from "../../utils/toastUtils";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { setUser, isLoading } = useAuth()

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const name = nameRef?.current?.value || ""
        const email = emailRef?.current?.value || ""
        const password = passwordRef?.current?.value || ""

        
        if (!email || !password) {
            console.error("Email and password are required");
            return;
        }
        try {
            const userData = await registerUser(name, email, password)
            setUser(userData?.user || null)
            navigate("/books");
        } catch (err: any) {
            showToast(err.response?.data?.message || "Registration failed", "error")
        }
    };
    if (isLoading) return <p>Loading...</p>

    return (
        <div className="p-8">
            <div className="max-w-md mx-auto p-8 sm:pb-12 sm:p-10 bg-secondary shadow-md rounded-md mt-24 ">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit} className="flex flex-col ">

                    <input type="text" name="name" placeholder="Name"
                        ref={nameRef}
                        className="w-full p-2  bg-primary text-black border rounded mb-3 outline-none"
                        required
                    />
                    <input type="email" name="email" placeholder="Email"
                        ref={emailRef}
                        className="w-full p-2  bg-primary text-black border rounded mb-3 outline-none"
                        required
                    />
                    <div className="relative">
                        <input name="password" placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            ref={passwordRef}
                            className="w-full p-2 bg-primary text-black border rounded mb-3 outline-none pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-5 transform -translate-y-1/2 text-black"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="btn_style cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center mt-3 text-sm">
                    Already have an account? <Link to="/" className="heading_text font-bold ">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
