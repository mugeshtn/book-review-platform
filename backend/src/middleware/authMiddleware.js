import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';


export const tokenAuth = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({
            message: "Not authorised, no token"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await UserModel.findById(decoded.userId).select("-password");
        console.log("Authenticated User:", req.user); 
        next()
    } catch (err) {
        res.status(401).json({ message: "Not authorized, invalid token" });
    }
}


export const adminAuth = async(req, res, next) => {
    try{
        const token = req.cookies.jwt;

        if (!token) return res.status(401).json({message: "Not authorised, no token"})
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.role !== "admin") {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }

        req.user = decoded;
        next();
    }catch(err){
        next(err)
    }
}