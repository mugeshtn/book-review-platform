import bcrypt from 'bcryptjs';
import UserModel from '../models/User.js';
import generateToken from '../utils/generateToken.js';



export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await UserModel.create({ name, email, password: hashedPassword })

        generateToken(res, user._id)

        res.status(201).json({ message: "User registered successfully" })
    } catch (err) {
        next(err);
    }
}


export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid credentials" })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)  return res.status(401).json({ message: "Invalid credentials" });

        generateToken(res, user._id, user.role)

        res.json({
            message: "Login successful",
            user: {
                id: user._id,
                role: user.role
            }
        })
    } catch (err) {
        next(err)
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};


export const logoutUser = (req, res) => {
    res.clearCookie("jwt", { httpOnly: true });
    res.json({ message: "Logged out successfully" })
}