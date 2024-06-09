import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({ title: '', author: '', description: '', price: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://book-store-28v8.onrender.com/api/books/${id}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://book-store-28v8.onrender.com/api/books/${id}`, book)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="form-container">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} placeholder="Title" required />
                <input type="text" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} placeholder="Author" required />
                <textarea value={book.description} onChange={(e) => setBook({ ...book, description: e.target.value })} placeholder="Description" required></textarea>
                <input type="number" value={book.price} onChange={(e) => setBook({ ...book, price: e.target.value })} placeholder="Price" required />
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;
