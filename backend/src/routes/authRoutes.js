import express from 'express';
import { getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/authController.js';
import { tokenAuth } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", tokenAuth, getUserProfile)
router.post("/logout", logoutUser);


export default router;