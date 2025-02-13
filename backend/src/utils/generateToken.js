import jwt from 'jsonwebtoken';


const generateToken = (res, userId, role) => {
    const token = jwt.sign({userId, role}, process.env.JWT_SECRET, {expiresIn: "7d"})

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        samesite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })
}

export default generateToken;