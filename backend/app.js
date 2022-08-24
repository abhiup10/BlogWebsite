import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user_routes';
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.
connect('mongodb+srv://abhishek:a9F2muOfAdl6Ix0S@cluster0.dwb7rtq.mongodb.net/Blog?retryWrites=true&w=majority').
then(()=>app.listen(5000)).
then(()=>
console.log("connected to Database and Listening to Localhost 5000 ")
).
catch((err)=>console.log(err));







//a9F2muOfAdl6Ix0S