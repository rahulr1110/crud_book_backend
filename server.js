import express from "express";
import connectDB from "./db.js";
import { Book } from "./models.js";

const app = express();

app.use(express.json());

connectDB();

//getting books
app.get("/books", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});
//getting book by id
app.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});
//update the book by id
app.put("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(id, req.body);
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete the book by id
app.delete("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

//create book
app.post("/book", async (req, res) => {
  try {
    const book = req.body;
    const createBook = await Book.create(book);
    res.status(200).json(createBook);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("server running");
});
