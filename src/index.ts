import express from "express";
import routes from './routes/index';
import mongoose from 'mongoose'

const app = express();

app.listen(3000, (err) => {
    if(err)
        console.log("App listen error", err);
    else
        console.log("Server is running 3000");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1',routes)

mongoose.connect('mongodb+srv://12twins7:FuutuJMCD3SBVYH6@cluster0.5wrwzib.mongodb.net')