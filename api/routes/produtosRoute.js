const { Router } = require('express');
const { atualizaProduto } = require('../controllers/ProdutosController');
const ProdutosController = require('../controllers/ProdutosController');

const router = Router();

router.get('/produtos', ProdutosController.pegaProdutos);

router.post('/produtos', ProdutosController.criaProduto);

router.put('/produtos/:id', ProdutosController.atualizaProduto);

router.delete('/produtos/:id', ProdutosController.apagaProduto);

module.exports = router;
