
const { Router } = require('express');
const { check } = require('express-validator');
const { isValidRole, checkMail } = require('../helpers/db_validators')
const { inputValidations } = require('../middleware/validation');
const {
    getUsers,
    createUsers,
    editUsers,
    patchUser,
    deleteUsers
} = require('../controllers/user');

const router = Router();

router.get('/', getUsers);

router.put('/:id', editUsers);

router.post(
    '/',
    [
        check('mail', 'Mail not valid').isEmail().custom(checkMail),
        check('name', 'Name required').not().isEmpty(),
        check('password', 'Passowrd atleast 6 characters').isLength({ min: 6 }),
        //check('role', 'Not valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('role').custom(isValidRole),
        inputValidations
    ], 
    createUsers
);

router.patch('/', patchUser);

router.delete('/:id', deleteUsers);

module.exports = router;