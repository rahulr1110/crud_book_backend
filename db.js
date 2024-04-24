import mongoose from "mongoose";

const connectDB =async ()=>{
  try {
    const connect =await mongoose.connect('mongodb+srv://admin:12345@cluster0.oqhsdjg.mongodb.net/crud_book_backend')
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB