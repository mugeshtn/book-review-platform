import express from 'express';
import { adminAuth } from '../middleware/authMiddleware';
import { deleteBook, deleteReview, deleteUser, getAllBooks, getAllUsers } from '../controllers/adminController';

const router = express.Router();

// User Management
router.get("/users", adminAuth, getAllUsers)
router.delete("/users/:userId", adminAuth, deleteUser);

// Book Management
router.get("/books", adminAuth, getAllBooks);
router.delete("/books/:bookId", adminAuth, deleteBook);

// Review Management
router.delete("/review/:reviewId", adminAuth, deleteReview);


export default router;