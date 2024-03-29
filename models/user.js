
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    mail: {
        type: String,
        required: [true, 'Correo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña obligatoria'],
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: [true, 'Rol obligatorio'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

UserSchema.methods.toJSON = function() {
    // Schema desde JSON a objeto de js
    const { __v, password,  _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema);