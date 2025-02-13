import mongoose, { model, Schema } from "mongoose";


const reviewSchema = new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        default: "",
        trim: true
    }
}, {timestamps: true});


const ReviewModel = mongoose.models.Review || model("Review", reviewSchema);
export default ReviewModel;