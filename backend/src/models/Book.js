import mongoose, { Schema, model} from "mongoose";

const bookSchema = new Schema({
    title:  {
        type: String,
        required: true,
        trim: true, 
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },
    averageRating: {
        type: Number, 
        default: 0
    }
}, {timestamps: true});

const BookModel = mongoose.models.Book || model("Book", bookSchema)
export default BookModel;