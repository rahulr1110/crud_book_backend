import express from "express";
import connectDB from "./db.js";

const app = express();

connectDB();

app.listen(5000, () => {
  console.log("server running");
});
