import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import EditBook from './Components/EditBook';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<BookList />} />
                        <Route path="/add-book" element={<AddBook />} />
                        <Route path="/edit-book/:id" element={<EditBook />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
