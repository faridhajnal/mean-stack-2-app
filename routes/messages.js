const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Message = require('../models/message'); //mongooe model
const User = require('../models/user');
router.get('/', function (req, res, next) { //get all messaages
    Message.find()
        .populate('user', 'firstName') //expand the retrieved data
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.use('/', function(req, res, next){ /* every request besides upper request */
    jwt.verify(req.query.token, 'chdsfywegf237r823gr', (err, decoded) => {
        if(err){ //token invaild/expired
            return res.status(401).json({
                title : 'Not authenticated',
                error :err
            });
        }
        next(); //let the request continue
    })
})

router.post('/', function (req, res, next) { //post one message
    var decoded = jwt.decode(req.query.token); //after checking if token is valid
    User.findById(decoded.user._id, (err,user)=>{
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
            var message = new Message({
            content: req.body.content,
            user: user
            });
            message.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                user.messages.push(result);
                user.save();
                res.status(201).json({
                    message: 'Saved message',
                    obj: result
                });
            });
        
    });
    
});

router.patch('/:id', function (req, res, next) { //partial update a message by id
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if(message.user != decoded.user._id){
            return res.status(401).json({
                title : 'Not authenticated',
                error :  'Users do not match'
            });
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', (req, res, next) => { //delete a message by id
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if(message.user != decoded.user._id){
            return res.status(401).json({
                title : 'Not authenticated',
                error : 'Users do not match'
            });
        }
        message.remove((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;