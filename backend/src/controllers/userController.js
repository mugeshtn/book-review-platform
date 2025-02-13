import UserModel from "../models/User.js";
import bcrypt from 'bcryptjs'



export const getUserProfile = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.user._id).select("-password")
        res.json(user);
    } catch (err) {
        next(err)
    }
}

export const updateUserProfile = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        user.name = req.body.name?.trim() || user.name;
        user.email = req.body.email?.trim() || user.email;
        const isSame = await bcrypt.compare(req.body.password, user.password)
        if (req.body.password?.trim() && !isSame) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(req.body.password, salt)
        }
        await user.save();
        res.json({ message: "Profile updated successfully" })
    } catch (err) {
        next(err)
    }
}


