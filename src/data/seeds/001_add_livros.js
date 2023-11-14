exports.seed = function(knex) {
  return  knex("livros").del()
  .then(function() {
    return knex("livros").insert([
      {
        titulo : "web design responsivo", autor : "mauricio samy silva" , ano : 2014 ,
        preco : 73.0 , foto : "https://s3.novatec.com.br/capas/9788575223925.jpg" ,
      },
      {
        titulo : "proteção moderna de dados", autor : "w.c.p" , ano : 2021 ,
        preco : 97.0 , foto : "https://s3.novatec.com.br/capas/9786586057843.jpg" ,
      },
      {
        titulo : "sql10", autor : " b.f" , ano : 2021 ,
        preco : 95.0 , foto : "https://s3.novatec.com.br/capas/9786586057447.jpg" ,
      },
    ])
  })
};
