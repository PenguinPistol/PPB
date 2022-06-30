const jwt = require('../services/jwt');

module.exports = {
    signIn: (req, res) => {
        let tokens = jwt.sign({
            id: req.params.id,
            group: req.params.group,
        });

        result = {};

        if (tokens == null) {
            res.json({ code: '01', message: 'Error', data: {} });
        } else {
            res.json({ code: '00', message: '', data: tokens });
        }
    },
};
