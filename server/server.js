import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import User from './routes/user.route';
import mongoose from 'mongoose';
import cors from 'cors';

//cors= new cors;


mongoose.connect('mongodb://localhost:27017/jwtauth');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/user', User);

app.get('/', function (req, res) {
    res.write(timestamp(" Hello KouGou"));
    res.json({
        "Greeting": "Welcome to the Postman"
    });
});


app.listen(7070, function () {
    timestamp(' Server running on port 7070 !')
});



function timestamp(message) {
    let date = new Date();
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    console.log(time + message);
    return (time + message);
};