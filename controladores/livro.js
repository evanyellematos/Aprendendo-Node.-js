 const fs = require ("fs");
 const { getTodosLivros, getLivroId, insereLivro, modificaLivro, deletaLivro } = require('../servicos/livro');

 function getLivros(req, res){
         try{
             // throw new Error("teste")
            const livros = JSON.parse(fs.readFileSync("livros.json"))
             res.send(livros)
         }
         catch (error){
                 res.status(500)
                 res.send('error.message')

         }
 }
 function getLivro(req, res){
     try{
         const id = req.params.id;

         if(id && Number (id)){
            const livro = getLivroId(id)
             res.send(livro)
         }
         else{
            res.status(422)
            res.send("ID inválido")
         }
     }
     catch (error){ 
             res.status(500)
             res.send('error.message')

     }
 }

 function postLivro(req, res){
     try{
         const livroNovo = req.body
         insereLivro(livroNovo)
         res.send("Livro inserido com sucesso");
     }
     catch (error) {
         res.status(500);
         res.send(error.message);

     }
 }

  function patchLivro(req, res){
      try{
        const id = req.params.id
        if(id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Item modificado com sucesso")
            } else {
                res.status(422)
                res.send("Id inválido")
            }
     } catch(error){
         res.status(500);
         res.send(error.message);
      }
  }
 function deleteLivro(req, res){
     try{
         const id = req.params.id;
         if(id && Number (id)){
            deletaLivro(id);
            res.send("Item excluido com sucesso")
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
     getLivros,
     getLivro,
     patchLivro,
     postLivro,
     deleteLivro,
 };