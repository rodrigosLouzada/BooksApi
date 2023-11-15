const express = require("express");
const app = express();
const PORT = 3001 ;
const Middleware = require("./middleware")
const mid = new Middleware()
const livros = require("./livros");

app.use("/livros", livros);

app.get("/", (req, res) => {
    res.send("ola mundo")
});

app.get("/cap12", (request, response) => {
    response.send('<h2> INTRODUÇÃO AO EXPRESS</H2>');
})

app.use("/filmes", (request, response) => {
    const { titulo, genero} = request.body;
    res.send(`FILME: ${titulo} --- GÊNERO ${genero}`);
});



app.get("/tranfere", mid.mid , (request, body) => {
    res.send("ok, valor tranferido com sucesso!");
});


 
app.listen(PORT , () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});