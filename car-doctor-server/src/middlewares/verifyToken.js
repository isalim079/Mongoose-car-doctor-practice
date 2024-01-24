

const verifyToken = (req, res, next) => {
    
    const token = req?.cookies?.token;
    console.log('token is in the middleware', token);

    // no token available
    if(!token) {
        return res.status(401).send({message: 'unauthorized access'})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).send({message: "unauthorized access"})
        }
        req.user = decoded
        next()
    })
};

module.exports = verifyToken;