const express = require("express");
const cors = require('cors');
const noteRoutes = require("./routes/noteRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('pages'));
app.use(cors({
    origin: ['http://localhost:3000']
}))


// ATUAL ROUTES
app.use("/api", noteRoutes);
app.use("/", htmlRoutes);

app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
