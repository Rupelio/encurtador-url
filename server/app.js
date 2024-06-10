const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const urlRoutes = require('./routes/index.js');

require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@url-encurter.1vplvin.mongodb.net/?retryWrites=true&w=majority&appName=url-encurter`
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!');
        app.listen(PORT);
    })
    .catch((err) => console.log(err));

app.use('/', urlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
