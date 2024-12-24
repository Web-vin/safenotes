const jwt = require('jsonwebtoken')
const JWT_SECRET = "vinayakishandsome"


const fetchuser=(req, res, next)=>{
    //Get the user from the jwt token
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "please authenticate a valid token"})
    }
    const data  = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
}



module.exports = fetchuser;