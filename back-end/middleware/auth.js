import jwt from "jsonwebtoken";
import ENV from '../config.js';

export default async function Auth(req, res, next){
    try {

        //access authorize to valid req
        const token = req.headers.authorization.split(" ")[1];

        //users detail
        const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);

        req.user = decodedToken;

        next()

    }catch(error){
        res.status(401).json({error : "Authentication failed"})
    }
}


export function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false

    }
    next()

}