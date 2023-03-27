
const express = require('express');
const cors = require('cors');

const { dbConnect } = require('../database/config')

class ServerClass {

    static app = '';
    static port = '';
    static usersPath = '';
    static authPath = '';

    constructor() {
        // Instancia Express
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'
        this.authPath = '/api/auth'

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

        // DB
        this.connectDB();
    }

    connectDB = async () => {
        await dbConnect();
    }

    middlewares()
    {
        // Express lee la carpeta public
        // Cuando llamas a / te devuelve el index.html
        this.app.use( express.static('public') );
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes ()
    {
        // Importarmos el route de express
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usersPath, require('../routes/user'));
    }

    start ()
    {
        this.app.listen( this.port, () => {
            console.log('Server active on, ', this.port);
        });
    }

}

module.exports = ServerClass;