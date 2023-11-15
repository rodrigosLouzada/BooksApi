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

module.exports = router;