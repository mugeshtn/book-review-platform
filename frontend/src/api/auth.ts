import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



export const registerUser = async (name: string, email: string, password: string) => {
    try {
        if (!name || !email || !password) {
            throw new Error("All fields (name, email, password) are required.");
        }
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }
        if (!passwordRegex.test(password)) {
            throw new Error(
                "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
            );
        }
        const { data } = await axios.post(`${API_BASE}/auth/register`,
            { name, email, password },
            { withCredentials: true }
        );
        return data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Registration failed");
    }
}




export const loginUser = async (email: string, password: string) => {

    if (!email || !password) {
        throw new Error("Email and password are required.");
    }
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
    }
    console.log("in loginuser")
    const { data } = await axios.post(`${API_BASE}/auth/login`,
        { email, password },
        { withCredentials: true }
    );

    return data;
}





export const logoutUser = async () => {
    try {
        await axios.post(`${API_BASE}/auth/logout`, {}, { withCredentials: true })
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Registration failed");
    }
}