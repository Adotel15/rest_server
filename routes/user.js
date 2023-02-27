
const { Router } = require('express');

const {
    getUsers,
    createUsers,
    editUsers,
    deleteUsers
} = require('../controllers/user')

const router = Router();

router.get('/', getUsers);

router.put('/', editUsers);

router.post('/', createUsers);

router.delete('/', deleteUsers);




module.exports = router;