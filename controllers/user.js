
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const getUsers = async (req = request, res = response) => {

    const { limit = 10, from = 0 } = req.query;
    // Filter
    const query = { state: true };

    const [ total, allUser ] = await Promise.all([
        User.countDocuments(query),
        User.find(query).skip(from).limit(Number(limit))
    ])

    res.status(200).json({ total, allUser });
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

const deleteUsers = async (req, res = response) => {

    const { id } = req.params;

    // const user = await User.findByIdAndDelete(id);
    // Not to delete user make state false
    const user  = await User.findByIdAndUpdate(id, { state: false });

    res.json({ msg: 'Deleted succesfully', user });
}

module.exports = {
    getUsers,
    createUsers,
    editUsers,
    patchUser,
    deleteUsers
}


