const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// // Iniando o app
const app = express();
app.use(express.json());
app.use(cors());

// Conectando ao DB
mongoose.connect('mongodb://localhost:27017/hopedb', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3333);