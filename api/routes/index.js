const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'running',
        version: '1.0.0'
    })
})