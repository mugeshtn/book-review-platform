import { getBooks, useDeleteBooks } from "../../api/books"


const ManageBooks = () => {
    const { data: books = [] } = getBooks();
    const { mutate: deleteBook } = useDeleteBooks();

    const handleDelete = (bookId: string) => {
        deleteBook(bookId)
    }

    return (
        <>
            <h1>Manage Books</h1>
            <div>
                {books.map((book) => (
                    <div key={book._id}>
                        <p>{book.title}</p>
                        <button onClick={() => handleDelete(book._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ManageBooks