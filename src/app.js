const express = require("express");
const app = express();
const PORT = 3001 ;
const Middleware = require("./middleware")
const mid = new Middleware()
const livros = require("./livros");

app.use("/livros", livros);

app.get("/home", (request, response) => {
    response.status(200).json({
        message: "Hello, you are accessing the '/home' route of my Books API. Everything is okay here! :)",
        stack: "Node.js, Express, Knex, SQLite",
        author:  {
            name: "Rodrigo Louzada",
            github: "https://github.com/rodrigosLouzada",
            gitlab: "https://gitlab.com/rodrigosLouzada",
            linkedin: "https://www.linkedin.com/in/rodrigo-louzada-443b682a0/"
        }
    });
});

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