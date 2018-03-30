import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Message from '../models/message.model';
import jwt from 'jsonwebtoken';


let db = mongoose.connect('mongodb://localhost:27017/jwtauth');

router.post('/send', (req, res) => {

    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        content: req.body.content
    });
    message.save().then(function (result) {
        console.log(result);
        res.status(200).json({
            success: 'New message has been sent !'

        });
    });
});

export default router;
