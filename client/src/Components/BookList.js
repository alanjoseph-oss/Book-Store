import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://book-store-28v8.onrender.com/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const deleteBook = (id) => {
        axios.delete(`http://localhost:5000/api/books/${id}`)
            .then(response => {
                setBooks(books.filter(book => book._id !== id));
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="book-list">
            {books.map(book => (
                <BookCard key={book._id} book={book} deleteBook={deleteBook} />
            ))}
        </div>
    );
};

export default BookList;
