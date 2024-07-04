import express from "express"
import blogs from "./routes/blogs.js"
import connectDB from "./db/connection.js";

const app = express();
const port = 8000
import cors from "cors"

app.use(cors({
    origin: '*'
}));

app.use("/blogs",blogs )

connectDB()

app.listen(port,()=>{
    console.log("Listening the port at 8000")
})