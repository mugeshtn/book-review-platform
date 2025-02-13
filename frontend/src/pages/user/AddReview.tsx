import { useParams } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm";
import { getBooksbyId } from "../../api/books";


const AddReview = () => {
    const { bookId = ""} = useParams<{ bookId: string }>();

    const { data: book, isLoading, error } = getBooksbyId(bookId)

    if (isLoading) return <p>Loading book details...</p>;
    if (error) return <p>Error loading book.</p>;

    return (
    <div className="max-w-3xl p-6 sm:p-4 py-18 mx-auto mt-10">
        <div className=" flex gap-5 bg-secondary p-6 shadow-md rounded-lg mb-8">
                <img src={book?.image} alt={book?.title} className="w-20 h-34 sm:w-40 sm:h-56 rounded-lg" />
                <div>
                    <h1 className="text-md sm:text-2xl mb-1 font-bold">{book?.title}</h1>
                    <p className="text-[10px] sm:text-[15px] text-gray-400">by {book?.author}.</p>
                    <p className="text-[10px] sm:text-[15px] mt-2">{book?.description}</p>
                </div>
            </div>
            <ReviewForm bookId={bookId!} />
    </div>
    );
};


export default AddReview;
