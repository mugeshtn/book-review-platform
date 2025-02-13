import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import StarRating from "../../components/StarRating";

const BookList: React.FC = () => {
    const { data: books = [], isLoading, error } = getBooks();

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error fetching books!</p>;

    return (
        <div className="container mx-auto py-12 mt-11">
            <h1 className="text-3xl font-bold text-center mb-10 text-black font-serif">Featured Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
                {books.length > 0
                    ? books.map((book) => (
                        <Link to={`/books/${book._id}`} key={book._id} className="p-5 border rounded-lg flex gap-4 bg-secondary">
                            <img src={book.image} alt={book.title} className="w-20 h-28 object-cover rounded-md" />
                            <div>
                                <h2 className="text-md xl:text-lg font-semibold mt-2">{book.title}</h2>
                                <p className="text-xs xl:text-md text-tertiary mb-6">{book.author}</p>
                                <StarRating rating={book?.averageRating}/>
                            </div>
                        </Link>

                    ))
                    : (
                        <h1>No books Added</h1>
                    )
                }
            </div>
        </div>
    )
}

export default BookList;