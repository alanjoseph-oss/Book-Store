import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, deleteBook }) => {
    return (
        <div className="book-card">
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <p>{book.description}</p>
            <p>${book.price}</p>
            <div className="actions">
                <Link to={`/edit-book/${book._id}`}>Edit</Link>
                <button onClick={() => deleteBook(book._id)}>Delete</button>
            </div>
        </div>
    );
};

export default BookCard;
