const express = require("express");
const router = express.Router();

const dbKnex = require("./data/db_config");

router.get("/" , async (request , response) => {
    try {
        const livros = await knex("livros").orderBy("id", "desc");

        response.status(200).json(livros);

    } catch (error) {
        response.status(400).json({ msg : error.message});
    }

});

router.post("/" , async (request, response) => {
    const {titulo , autor, ano , preco , foto} = request.body;

    if(!titulo || !autor || !ano || !preco || !foto ) {
        response.status(400).json({ msg : "enviar titulo, autor, ano , preço e foto!"});
        return
    }

    try {
        const novo = await dbKnex("livros").insert(({titulo , autor, ano , preco , foto}));
        response.status(201).json({ id: novo[0]});

    } catch(error) {
        response.status(400).json({ msg : error.message})
    }
});

router.put("/:id" , async (request , response) => {
    const { id } = request.params;
    const { preco } = request.body;
    
    try {
        await dbKnex("livros").update({ preco }).where({ id });
        response.status(200).json()

    }catch(error) {
        response.status(400).json({ msg : error.message})
    }

});


router.delete("/:id", async (resquest, response) => {
    const { id } = resquest.params;

    try {
        await dbKnex("livros").del().where({ id });
        response.status(200).json();

    }catch(error) {
        response.status(400).json({ msg : error.message})

    }
});

router.get("/filtro/:palavra" , async (request, response) => {
    const {palavra} = request.params;
    
    try {
        const livros = await dbKnex("livros")
        .whereLike("titulo", `${palavra}`)
        .orWhereLike("autor" , `${palavra}`);

    }catch(error) {
        response.status(400).json({ msg : error.message});
    }
});

module.exports = router;