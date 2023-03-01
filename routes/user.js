
const { Router } = require('express');

const {
    getUsers,
    createUsers,
    editUsers,
    patchUser,
    deleteUsers
} = require('../controllers/user')

const router = Router();

router.get('/', getUsers);

router.put('/:id', editUsers);

router.post('/', createUsers);

router.patch('/', patchUser);

router.delete('/', deleteUsers);




module.exports = router;