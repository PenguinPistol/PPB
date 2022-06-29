const jwt = require('jsonwebtoken');
//const secret = process.env.SECRET;
const secret = 'salfkjsadskfjsa';

module.exports = {
    // 토큰 발급
    sign: (user) => {
        const payload = {
            id: user.id,
            group: user.group
        };
        const access = jwt.sign(payload, secret, {
            algorithm: 'HS256',
            expiresIn: '1h'
        });
        const refresh = jwt.sign({}, secret, {
            algorithm: 'HS256',
            expiresIn: '14d'
        });

        return {
            accessToken: access,
            refreshToken: refresh
        };
    },
    // 액세스 토큰 검증
    verify: (accessToken) => {
        let decoded = null;
        try {
            decoded = jwt.verify(accessToken, secret);
            return {
                id: decoded.id,
                group: decoded.group
            };
        } catch(err) {
            console.log(err.message);
            return null;
        }
    },
    refresh: (refreshToken) => {
        try {
            jwt.verify(refreshToken, secret);
            return true;
        } catch(err) {
            console.log(err.message);
            return false;
        }
    }
};