
const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

const validateJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token');

    if(!token) return res.status(401).json({ msg: 'Not token' });

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(uid);

        if(!user) return res.status(401).json({ msg: 'User not valid' }); 

        if(!user.state) return res.status(401).json({ msg: 'Token not valid' });

        req.user = user;


    } catch(error) {
        console.log(error);
        res.status(401).json({ msg: 'Token not valid' });
    }

    next();

}

module.exports = {
    validateJWT
}