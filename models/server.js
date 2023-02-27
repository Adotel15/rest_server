
const express = require('express');
const cors = require('cors');

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
        // Cuando llamas a / te devuelve el index.html
        this.app.use( express.static('public') );
        this.app.use( cors() );
    }

    routes ()
    {
        this.app.get('/api', (req, res) => {
            res.json({
                message: "Ya lo see"
            })
        });

        this.app.put('/api', (req, res) => {
            res.json({
                message: "put Ya lo see"
            })
        });

        this.app.post('/api', (req, res) => {
            res.json({
                message: " post Ya lo see"
            })
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                message: " delete Ya lo see"
            })
        });
    }

    start ()
    {
        this.app.listen( this.port, () => {
            console.log('Server active on, ', this.port);
        });
    }

}

module.exports = ServerClass;