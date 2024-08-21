const fs = require ("fs")
const { getTodosFavoritos } = require("../servicos/favorito")

function getFavoritos(req, res){
    try{
        const livros = getTodosFavoritos()
        res.send(livros)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
        }
}

function postFavorito(req, res){
    try{
        const id = req.params.id;
            InsereLivroFavorito(id)
            res.status(201)
            res.send("Livro inserido com sucesso")
        }
        catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deletaFavoritoPorId(req, res){
    try{
        const id = req.params.id;
        if(id && Number(id)){
           deletaFavoritoPorId(Number(id));
           res.send("Favorito excluido com sucesso")
        } else{
           res.status(422)
           res.send("Id inválido")
        }
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavorito,
    deletaFavoritoPorId,
}