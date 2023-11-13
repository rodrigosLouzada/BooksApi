module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/editora.db3'
    } ,
  
    useNullAsDefault : true ,
    
    migrations: {
      directory : "./src/data/migrations",
    } ,

    seeds : {
      directory : "./src/data/seeds"
    }
  },
}