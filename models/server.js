
const express = require('express');

class ServerClass {

    constructor() {
        // Instancia Express
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares()
    {
        // Express lee la carpeta public
        this.app.use( express.static('public') )
    }

    routes ()
    {
        this.app.get('/', (req, res) => {
            res.send("Hola")
        })
    }

    start ()
    {
        this.app.listen( this.port, () => {
            console.log('Server active on, ', this.port);
        })
    }

}

module.exports = ServerClass;