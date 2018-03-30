import mongoose from 'mongoose';

const message = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    senderId: {type: String},
    receiverId: {type: String},
    content: {type: String},
});

module.exports = mongoose.model('Message', message);