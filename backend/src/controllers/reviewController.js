import ReviewModel from '../models/Review.js';

export const getReviews = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit

        const reviews = await ReviewModel.find({ book: bookId })
            .populate('user', 'name')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })

        const totalReviews = await ReviewModel.countDocuments({ book: bookId });

        //Next page number
        const hasNextPage = page * limit < totalReviews;
        const nextPage = hasNextPage ? page + 1 : null;

        res.json({
            reviews,
            nextPage,
            totalReviews
        });

    } catch (err) {
        next(err);
    }
}

export const addReviews = async (req, res, next) => {
    try {
        const { rating, comment } = req.body;
        const review = await ReviewModel.create({
            book: req.params.bookId,
            user: req.user._id,
            rating,
            comment
        });
        res.status(201).json({ message: "Review added successfully", review });
    } catch (err) {
        next(err)
    }
}