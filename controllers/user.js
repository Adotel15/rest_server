
const { response, request } = require('express');

const User = require('../models/user');

const getUsers = (req = request, res = response) => {

    // Comes after de ? in the url
    const { nom, num = 'No Num' } = req.query;

    res.json({ msg: 'Get', nom, num });
}

const createUsers = async (req = request, res = response) => {

    const body = req.body;
    const user = new User(body);

    try {
        await user.save();
    } catch (error) {
        console.log(error);
        throw new Error ('Error al crear Usuario')
    }

    res.status(200).json({ msg: `${body.name} created` });
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


