
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const getUsers = (req = request, res = response) => {

    // Comes after de ? in the url
    const { nom, num = 'No Num' } = req.query;

    res.json({ msg: 'Get', nom, num });
}

const createUsers = async (req = request, res = response) => {

    const { name, mail, password, role } = req.body;

    const user = new User({
        name,
        mail,
        password,
        role
    });

    const mailExist = await User.findOne({ mail });
    if(mailExist) return res.status(400).json({ msg: 'Mail already registered' })
    

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

const editUsers = (req = request, res = response) => {

    // Comes from routers
    const id = req.params.id;

    res.json({ msg: 'Edit' });
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


