'use strict'
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/', function (req, res, next) {
    var usr = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : bcrypt.hashSync(req.body.password, 10), //one way, cannot be decrypted
        email : req.body.email
    });

    usr.save((err, doc, num) => {
        if(err){
            return res.status(500).json({
                title : 'error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            user_id: doc._id,
            count: num
        });
    })
});

router.post('/signin', (req, res) => {
    User.findOne({email: req.body.email}, (err,user) => {
        if(err){
            return res.status(500).json({
                title : 'error occured',
                error: err
            });
        }
        if(!user || !bcrypt.compareSync(req.body.password, user.password)){
            return res.status(404).json({
                title : 'Login Failed',
                error : { message : 'invalid credentials'}
            });
        }

        if(bcrypt.compareSync(req.body.password, user.password)){
            let token = jwt.sign({user: user}, 'chdsfywegf237r823gr', {expiresIn: 20});
            return res.status(200).json({
                title : ' te has rifado sobrino ',
                token: token,
                uid : user._id 
            });
        }

    })
});

module.exports = router;
