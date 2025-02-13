import express from "express";
import { addBook, getBookById, getBooks } from "../controllers/bookController.js";
import { tokenAuth } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", tokenAuth, addBook);


export default router;