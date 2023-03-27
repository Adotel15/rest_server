
const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if(!token) return res.status(401).json({ msg: 'Not token' });

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);

        req.uid = uid;

    } catch(error) {
        console.log(error);
        res.status(401).json({ msg: 'Token not valid' });
    }

    next();

}

module.exports = {
    validateJWT
}