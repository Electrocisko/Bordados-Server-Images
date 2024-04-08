import {createToken, decodeToken} from "../helpers/jwt.js";

const auth =  (req, res, next) => {
    try {
        if(!req.headers.authorization) throw new Error("Peticion no tiene cabecera de autenticación");
        let payload = decodeToken(req.headers.authorization);
        if(!payload) throw new Error("Token expirado");
        req.user = payload;
        next();
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message,
          });
    }
}

export default auth;