class Middleware {
    constructor() {} 

    mid (request, response, next) {
        res.send(`..................... Acessando em ${new Date()}`);
        next();
    }

} 

module.exports = Middleware