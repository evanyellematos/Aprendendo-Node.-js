const fs = require ("fs");

function getTodosFavoritos(){
    const data = fs.readFileSync("favoritos.json");
    return  JSON.parse(data)
}

    function deletaFavoritoPorId(id){
        const livros =  JSON.parse(fs.readFileSync("favoritos.json"))

        const livrosFiltrados = livros.filter(livro => livro.id !== id)
        fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))

    }

    function InsereLivroFavorito(id){
        const livros =  JSON.parse(fs.readFileSync("livros.json"))
        const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))


        const livroInserido = livros.find(livros => livros.id === id)
        const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
        fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))


    }
module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    InsereLivroFavorito
}