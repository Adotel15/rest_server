
const { Router } = require('express');
const { check } = require('express-validator');
const { isValidRole, checkMail, existUserByID } = require('../helpers/db_validators')
const { inputValidations } = require('../middleware/validation');
const {
    getUsers,
    createUsers,
    editUsers,
    patchUser,
    deleteUsers
} = require('../controllers/user');

const router = Router();

const postMiddleware = [
    check('mail', 'Mail not valid').isEmail().custom(checkMail),
    check('name', 'Name required').not().isEmpty(),
    check('password', 'Passowrd atleast 6 characters').isLength({ min: 6 }),
    //check('role', 'Not valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(isValidRole),
    inputValidations
];

const putMiddleware = [
    check('id', 'Not valid ID').isMongoId(),
    check('id').custom(existUserByID),
    check('role').custom(isValidRole),
    inputValidations
];

const deleteMiddleware = [
    check('id', 'Not valid ID').isMongoId(),
    check('id').custom(existUserByID),
    inputValidations
]

router.get('/', getUsers);

router.put('/:id', putMiddleware, editUsers);

router.post( '/', postMiddleware, createUsers);

router.patch('/', patchUser);

router.delete('/:id', deleteMiddleware, deleteUsers);

module.exports = router;