
const express = require('express');
const cors = require('cors');

class ServerClass {

    app = '';
    port = '';
    usersPath = '';

    constructor() {
        // Instancia Express
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares()
    {
        // Express lee la carpeta public
        // Cuando llamas a / te devuelve el index.html
        this.app.use( express.static('public') );
        this.app.use( cors() );
    }

    routes ()
    {
        // Importarmos el route de express
       this.app.use(this.usersPath, require('../routes/user'))
    }

    start ()
    {
        this.app.listen( this.port, () => {
            console.log('Server active on, ', this.port);
        });
    }

}

module.exports = ServerClass;