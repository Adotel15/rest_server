
const { response } = require('express');

const getUsers = (req, res = response) => {
    res.json({ msg: 'Get' });
}

const createUsers = (req, res = response) => {
    res.json({ msg: 'Create' });
}

const editUsers = (req, res = response) => {
    res.json({ msg: 'Edit' });
}

const deleteUsers = (req, res = response) => {
    res.json({ msg: 'Delete' });
}

module.exports = {
    getUsers,
    createUsers,
    editUsers,
    deleteUsers
}


