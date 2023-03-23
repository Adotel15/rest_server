
const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '' ) => {

    const roleExist = await Role.findOne({ role });
    if(!roleExist) throw new Error('Role not valid');

}

const checkMail = async mail => {

    const mailExist = await User.findOne({ mail });
    if(mailExist) throw new Error('Mail already registred');

}

const existUserByID = async id => {

    const userExist = await User.findById(id);
    if(!userExist) throw new Error(`Id does no exist ${id}`);
    
}

module.exports = {
    isValidRole,
    checkMail,
    existUserByID
}