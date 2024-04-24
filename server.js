import express from "express";
import connectDB from "./db.js";
import { Book } from "./models.js";

const app = express();

app.use(express.json())

connectDB();

//getting books
app.get('/books',async (req,res)=>{
 try {
   const book =await Book.find()
   res.status(200).json(book)
 } catch (error) {
   res.status(500).json(error)
 }
})


//create book
app.post('/book',async (req,res)=>{
  try {
    const book = req.body
    const createBook =await Book.create(book)
    res.status(200).json(createBook)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.listen(5000, () => {
  console.log("server running");
});
