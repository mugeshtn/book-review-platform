import mongoose from "mongoose";
import BookModel from "../models/Book";
import UserModel from "../models/User"
import ReviewModel from "../models/Review";


export const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find({}, "-password");

        if (!users) return res.status(404).json({ message: "Failed fetching Users" });
        if (users.length === 0) return res.status(404).json({ message: "Users not found" });

        res.json(users);
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        await UserModel.findByIdAndDelete(userId)

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid book ID format" });
        }

        res.json({ message: "User deleted successfully" })
    } catch (err) {
        next(err)
    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await BookModel.find();

        if (!books) return res.status(404).json({ message: "Failed fetching Users" });
        if (books.length === 0) return res.status(404).json({ message: "Users not found" });

        res.json(books);
    } catch (err) {
        next(err)
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        const { bookId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ message: "Invalid book ID format" });
        }

        await BookModel.findByIdAndDelete(bookId);
        res.json({ message: "Book deleted successfully" })
    } catch (err) {
        next(err)
    }
}

export const deleteReview = async (req, res, next) => {
    try {
        const { reviewId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(reviewId)) {
            return res.status(400).json({ message: "Invalid book ID format" });
        }

        await ReviewModel.findByIdAndDelete(reviewId);
        res.json({ message: "Review deleted successfully" })
    }catch(err){
        next(err)
    }
}