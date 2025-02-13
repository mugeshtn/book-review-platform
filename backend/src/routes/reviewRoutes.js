import express from 'express';
import { tokenAuth } from '../middleware/authMiddleware.js';
import { addReviews, getReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.get("/:bookId", getReviews);
router.post("/:bookId", tokenAuth, addReviews);

export default router;