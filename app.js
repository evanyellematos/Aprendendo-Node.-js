const express = require("express");
const rotasLivro = require("./rotas/livro");
const rotasFavoritos = require ("./rotas/favorito");

const cors = require ("cors")

 const app = express();
 app.use(express.json())
 app.use(cors({origin: "*" }));


 app.use('/livros', rotasLivro);
 app.use('/favoritos', rotasFavoritos)

    
 const port = 8000;

  app.listen(port, ()=>{
     console.log(`Escutando a porta ${port}`);

 
 });

