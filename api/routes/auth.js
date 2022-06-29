const express = require('express');
const jwt = require('../services/jwt');
const router = express.Router();


// 로그인
router.get('/login', (req, res) => {
    tokens = jwt.sign({
        id: 'kssong@natoo.co',
        group: 'GR001'
    });

    if(tokens == null) {
        res.json({
            code: '99',
            message: 'error',
            data: {}
        });
    } else {
        res.json({
            code: '00',
            message: '',
            data: tokens
        });
    }
});


module.exports = router;