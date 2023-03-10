
const { Router } = require('express');
const { check } = require('express-validator');

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

router.post('/'
    ,[check('mail', 'Mail not valid').isEmail() ]
    , createUsers
);

router.patch('/', patchUser);

router.delete('/:id', deleteUsers);




module.exports = router;