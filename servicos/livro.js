 const fs = require ("fs");

function getTodosLivros(){
     return(
       JSON.parse(fs.readFileSync("livros.json"))

     )}
     function getLivroId(id){
           const livros = JSON.parse(fs.readFileSync("livros.json"))
             const livroFiltrado = livros.filter(livro=>livro.id===id)
             return livroFiltrado;
    
     }
         function insereLivro(livroNovo){
           const livros = JSON.parse(fs.readFileSync("livros.json"))

             const novaListaDeLivros = [...livros, livroNovo]

             fs.writeFileSync ("livros.json", JSON.stringify(novaListaDeLivros))

       }
        function modificaLivro(modificacoes, id){
            let livrosAtuais = getTodosLivros
            const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
            const conteudoMudado = {...livrosAtuais [indiceModificado], ...modificacoes }

            livrosAtuais[indiceModificado] = conteudoMudado
            
             fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

             // livrosAtuais[indiceModificado] -> {id: "2", nome:"Livro amarelo"}
             // modificacoes ->{nome: "livro azul"}
        }

         function deletaLivro( id){
            const livros = JSON.parse(fs.readFileSync("livros.json"));

            const livroFiltrado = livros.filter(livro=>livro.id!==id);
             fs.writeFileSync("livros.JSON", JSON.stringify(livroFiltrado));

   

         }

    module.exports = {
            getTodosLivros,
            getLivroId,
            insereLivro,
            modificaLivro,
            deletaLivro,
 };

