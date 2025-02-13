import { useNavigate, useParams } from "react-router-dom";
import { getBooksbyId } from "../../api/books";
import { getBookReviews } from "../../api/review";
import StarRating from "../../components/StarRating";
import { Link } from "react-router-dom";
import { showToast } from "../../utils/toastUtils";
import { useAuth } from "../../context/AuthContext";


const BookDetails = () => {
    const { bookId = "" } = useParams<{ bookId: string }>();
    const { data: book, isLoading, error } = getBooksbyId(bookId)
    const { data: reviewData} = getBookReviews(bookId)
    const navigate = useNavigate()
    const {user} = useAuth();

    const reviews = reviewData?.reviews || []

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{(error as Error).message}</p>;

    const handleAddReview = () => {
        if (!user) {
            showToast("Please login to add a review", "error");
            navigate("/login"); // Redirect to login page
        } else {
            navigate(`/reviews/${book?._id}`);
        }
    };

    return (
        <div className="container mx-auto p-6 sm:p-4 my-12 mt-24">
            <div className=" flex gap-5 bg-secondary p-8 shadow-md rounded-lg">
                <img src={book?.image} alt={book?.title} className="w-22 h-34 sm:w-40 sm:h-56 rounded" />
                <div>
                    <h1 className="text-md sm:text-2xl font-bold">{book?.title}</h1>
                    <p className="text-[10px] sm:text-[15px] text-tertiary">by {book?.author}</p>
                    <p className="text-[10px] sm:text-[15px] my-2">{book?.description}</p>
                    <StarRating rating={book?.averageRating || 0}/>
                    <Link to={`/reviews/${book?._id}`}>
                        <button className="btn_style sm:mt-10" onClick={handleAddReview}>Add Review</button>
                    </Link>
                </div>
            </div>

            <div className="my-8 sm:my-12  rounded-lg bg-secondary p-4 sm:px-10 sm:py-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold font-serif">Reviews</h2>
                <div className="mt-4 sm:mt-8">
                    {reviews.length > 0
                        ? (
                            reviews.map((review: any) => (
                                <div key={review._id} className="p-3 mb-1 bg-primary rounded-md">
                                    <p className="text-secondary font-bold text-md">{review.user.name}.</p>
                                    <p className="text-secondary text-md font-mono">{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                </div>
            </div>
        </div>
    );
}

export default BookDetails;