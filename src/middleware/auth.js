import jwt from 'jsonwebtoken'
export default function auth(req, res, next) {
    const bearerHeader = req?.headers?.['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader?.split(' ');
        const token = bearer?.[1];
        req.token = token;
        const verified = jwt.verify(token, process.env.SECREAT_KEY)
        if (verified) {
            next()

        } else {
            return res.status(401).json({ message: 'invaild token' });

        }
    } else {
        return res.status(401).json({ message: 'invaild token' });

    }
}

