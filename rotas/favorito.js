const { Router } = require("express");

const {getFavoritos, postFavorito, deletaFavoritoPorId} = require("../controladores/favorito");

const router = Router();

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id',  deletaFavoritoPorId);

module.exports = router;
