
const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

    // Comes after de ? in the url
    const { nom, num = 'No Num' } = req.query;

    res.json({ msg: 'Get', nom, num });
}

const createUsers = (req, res = response) => {

    const body = req.body;

    res.json({ msg: 'Create', body });
}

const editUsers = (req, res = response) => {

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


