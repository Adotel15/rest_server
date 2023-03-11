
const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const {
    getUsers,
    createUsers,
    editUsers,
    patchUser,
    deleteUsers
} = require('../controllers/user');
const { inputValidations } = require('../middleware/validation');

const router = Router();

router.get('/', getUsers);

router.put('/:id', editUsers);

router.post(
    '/',
    [
        check('mail', 'Mail not valid').isEmail(),
        check('name', 'Name required').not().isEmpty(),
        check('password', 'Passowrd atleast 6 characters').isLength({ min: 6 }),
        //check('role', 'Not valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('role').custom( async (role = '' ) => {
            const roleExist = await Role.findOne({ role });
            if(!roleExist) throw new Error('Role not valid');
        }),
        inputValidations
    ], 
    createUsers
);

router.patch('/', patchUser);

router.delete('/:id', deleteUsers);




module.exports = router;