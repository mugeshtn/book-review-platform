import BookModel from "../models/Book.js";

export const getBooks = async (req, res, next) => {
    try {
        const books = await BookModel.find();
        res.json(books)
    }catch(err){
        next(err)
    }
}


export const getBookById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const book = await BookModel.findById(id);
        if(!book){
            return res.status(404).json({message: "Book not found"})
        }
        res.json(book)
    }catch(err){
        next(err);
    }
}

export const addBook = async(req, res, next) => {
    try {
        const { title, author, description, image } = req.body;
        const book = await BookModel.create({title, description, author, image})
        
        res.status(201).json(book)
    } catch (err) {
        next(err)
    }
}