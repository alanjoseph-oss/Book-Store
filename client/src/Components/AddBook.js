import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, description, price };

        axios.post('http://localhost:5000/api/books', newBook)
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
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
