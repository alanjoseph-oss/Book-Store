import express from'express'
import mongoose from'mongoose'
import cors from'cors'

const app = express();
const PORT = process.env.PORT || 5000;
const mongodburl = "mongodb+srv://alanj5401:dk2viP7x5XkAmc9K@book-store.xlo5evj.mongodb.net/?retryWrites=true&w=majority&appName=book-store"

app.use(cors());
app.use(express.json());

mongoose.connect(mongodburl, {
    
});

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
});

const Book = mongoose.model('Book', bookSchema);

// CRUD Routes
app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post('/api/books', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});

app.put('/api/books/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
});

app.delete('/api/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
