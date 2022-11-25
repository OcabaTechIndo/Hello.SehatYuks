var express = require('express');
var router = express.Router();
const validator =require('fastest-validator');

const { Content } = require('../models');

const v = new validator();

router.get('/', async (req, res) => {
    const contents = await Content.findAll();
    return res.json(contents);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const content = await Content.findByPk(id);
    return res.json(content) || {};
});

router.post('/', async (req, res) => {
    const schema ={
        title: 'string',
        description: 'string'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length){
        return res
        .status(400)
        .json(validate);
    }

    const content = await Content.create(req.body);

    res.json(content);
});

router.put('/id', async (req, res) => {
    const id = req.params.id;

    let content = await Content.findByPk(id);

    if (!content){
        return res.json({message: 'Article not found'});
    }

    const schema ={
        title: 'string|optinal',
        description: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length){
        return res
        .status(400)
        .json(validate);
    }

    content = await content.update(req, body);
    res.json(product);
});

router.delete('/:id', async(req,res) => {
    const id = req.params.id;

    let content = await Content.findByPk(id);

    if (!content){
        return res.json({message: 'Article not found'});
    }

    await content.destroy();

    res.json({
        message: 'Content is delete'
    })
});

module.exports.exports = router;