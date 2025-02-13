import express from "express";
import { getUserProfile, updateUserProfile } from "../controllers/userController.js";
import { tokenAuth } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/", tokenAuth, getUserProfile);
router.put("/", tokenAuth, updateUserProfile);

export default router