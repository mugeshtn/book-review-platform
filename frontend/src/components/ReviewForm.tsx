import { useRef } from "react";
import { addReviews } from "../api/review";
import { showToast } from "../utils/toastUtils";

interface ReviewFormProps {
    bookId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ bookId }) => {
    const ratingRef = useRef<HTMLSelectElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async () =>{
        const rating = Number(ratingRef?.current?.value) || 0 ;
        const comment = commentRef?.current?.value || ""

        try{
            const reviewData = await addReviews(bookId, rating, comment)
            showToast(reviewData.message, 'success');
        }catch(err: any){
            showToast(err.response?.data?.message || "Failed Adding review", 'error')
        }
    }


    return (
        <form className="p-8 border rounded-md shadow-md bg-secondary">
            <h2 className="text-3xl font-semibold font-serif mb-6">Add a Review</h2>

            <label className="block mb-2 font-serif">Rating:</label>
            <select ref={ratingRef} className="bg-primary text-black outline-none font-bold rounded-md p-2 w-full appearance-none">
                {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((r) => (
                    <option className="font-bold text-black" key={r} value={r}>{r} ⭐</option>
                ))}
            </select>

            <label className="block mt-3 mb-2 font-serif">Comment:</label>
            <textarea ref={commentRef} className="bg-primary font-serif text-secondary outline-none rounded-md p-2 w-full h-20"></textarea>

            <button
                type="submit"
                className="mt-3 btn_style font-serif"
                onClick={handleSubmit}
            >
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;
