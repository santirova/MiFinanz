const express = require('express')

//Habilitar las variables de entorno 
require('dotenv').config()

//Inicializa el servidor de express
const app = express()

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Mensaje de respuesta' })
})
// Middlewares
app.use(express.json())

//Definir el puerto
const port = process.env.PORT || 4000;

// Arrancar Servidor
app.listen(port, () => {
    console.log(`Server is running. http://localhost:${port}`)
})