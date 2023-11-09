const express = require("express");
const app = express();
const PORT = 3001 ;

app.get("/", (req, res) => {
    res.send("ola mundo")
});

app.get("/cap12", (request, response) => {
    response.send('<h2> INTRODUÇÃO AO EXPRESS</H2>');
})

app.listen(PORT , () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});