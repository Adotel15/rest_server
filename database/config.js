
const mongoose = require('mongoose');

const dbConnect = async () => {

    try {

        await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
        });

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexión');
    } finally {
        console.log(`Conectado a Mongo `)
    }

}

module.exports = {
    dbConnect
} 