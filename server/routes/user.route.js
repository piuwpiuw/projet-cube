import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

let db = mongoose.connect('mongodb://localhost:27017/jwtauth');

router.post('/signup', function (req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            user.save().then(function (result) {
                console.log(result);
                res.status(200).json({
                    success: 'New user has been created !'
                });
            }).catch(error => {
                res.status(500).json({
                    error: err
                });
            });
        }
    });
});

router.post('/signin', function (req, res) {
    User.findOne({ email: req.body.email })
        .exec()
        .then(function (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        failed: 'Unauthorized'
                    });
                }
                if (result) {
                    const JWTToken = jwt.sign({
                        email: user.email,
                        _id: user._id
                    },
                        'secret',
                        {
                            expiresIn: '1h'
                        });
                    return res.status(200).json({
                        success: 'Welcome to the JWT Auth',
                        token: JWTToken
                    });

                    return res.status(401).json({
                        failed: 'Unauthorized'
                    });
                }
            });

        })
        .catch(error => {
            res.status(500).json({
                error: error

            });
        });
});



router.get('/message', function (req, res) {
    let token = req.body.token || req.query.token || req.headers.token;
    if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                User.find({}, function (err, users) {
                    let userList = {};

                    res.send(users);

                });
                req.decoded = decoded;
            }
        });
    } else {

        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    };
});

module.exports = router;