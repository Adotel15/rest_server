
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const getUsers = async (req = request, res = response) => {

    // Comes after de ? in the url
    //const { nom, num = 'No Num' } = req.query;

    const { limit = 10, from = 0 } = req.query;
    const users = await User.find()
        .skip(from)
        .limit(Number(limit));

    res.json({ users });
}

const createUsers = async (req = request, res = response) => {

    const { name, mail, password, role } = req.body;

    const user = new User({
        name,
        mail,
        password,
        role
    });

    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    try {
        await user.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error', body: error })
    }

    return res.status(200).json({ user });
}

const editUsers = async (req = request, res = response) => {

    // Comes from routers
    const { id } = req.params;
    const { _id, password, google, mail, ...rest } = req.body;

    if(password) {
        const salt = bcryptjs.genSaltSync(10);
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const newUser = await User.findByIdAndUpdate(id, rest);

    res.json({ msg: newUser });
}

const patchUser = (req, res = response) => {
    res.json({ msg: 'Patch' });
}

const deleteUsers = (req, res = response) => {
    res.json({ msg: 'Delete' });
}

module.exports = {
    getUsers,
    createUsers,
    editUsers,
    patchUser,
    deleteUsers
}


