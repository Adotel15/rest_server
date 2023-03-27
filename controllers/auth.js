
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const loginController = async (req, res = response) => {

    const { mail, password } = req.body;

    try {
        const user = await User.findOne({ mail });
        if (!user) return res.status(400).json({ msg: 'User no correct'});
        if (!user.state) return res.status(400).json({ msg: 'User not activated' });

        const validPassword = bcryptjs.compareSync( password, user.password );
        if(!validPassword) return res.status(400).json({ msg: 'Password not correct' });
        

    } catch (error) {
        return res.status(500).json({ msg: 'Error, talk to administrator' });
    }
};

module.exports = {
    loginController,
}