const router = require('express').Router();
const produto = require('../controllers/ProdutoController');

router.route('/')
    .get((req, res) => produto.get(req, res))
    .post((req, res) => produto.post(req, res));

router.route('/:id')
    .get((req, res) => produto.getId(req, res))
    .put((req, res) => produto.put(req, res))
    .delete((req, res) => produto.delete(req, res));

module.exports = router;

// module.exports = (app) => {

//     const produto = require('../controllers/ProdutoController');

//     app.route('/produtos')
//         .get( (req, res) => produto.get(req, res))
//         .post( (req, res) => produto.post(req, res));

//     app.route('/produtos/:id')
//         .get( (req, res) => produto.getId(req, res))
//         .put( (req, res) => produto.put(req, res))
//         .delete( (req, res) =>  produto.delete(req, res));
// }