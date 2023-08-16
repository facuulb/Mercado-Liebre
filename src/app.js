// Requerir paquetes a utilizar en el proyecto
const express = require("express");
const app = express();

const path = require("path");

// Declarar los recursos estaticos ( imagenes, css )
app.use(express.static("public"));

// Poner a escuchar al servudor 
app.listen(3030, () => console.log("Servidor corriendo")) 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

