"use strict";

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => res.status(200).json({ "message": "Hello World!" }))

const pieno = {
    "return_value": 1,
    "id": "pieno",
    "name": "esp8266-SA",
    "hardware": "esp8266",
    "connected": true
};

const vuoto = {
    "return_value": 0,
    "id": "vuoto",
    "name": "esp8266-SA",
    "hardware": "esp8266",
    "connected": true
};

const offline = {
    "message": "Requested device is not online",
    "connected": false,
    "id": "offline",
};

app.get('/pieno/digital/4', (req, res) => res.status(200).json(pieno))
app.get('/vuoto/digital/4', (req, res) => res.status(200).json(vuoto))
app.get('/offline/digital/4', (req, res) => res.status(200).json(offline))

app.get('/dev_STB01/digital/4', (req, res) => res.status(200).json(pieno))
app.get('/dev_STB02/digital/4', (req, res) => res.status(200).json(vuoto))
app.get('/dev_STB03/digital/4', (req, res) => res.status(200).json(offline))

app.listen(port, () => console.log(`Simulatore aperto nella porta ${port}!`))
