const express = require('express');
const controle = require('./controle/cotrole');
const router = express.Router();

router.get('/',controle.getHomePage);
router.all('/Newarticle',controle.getnewarticle);
router.get('/showarticle/:id',controle.ShowOne);
router.all('/edit/:id',controle.updateArticle);
router.get('/Delete/:id',controle.delArticle);



module.exports= router;

