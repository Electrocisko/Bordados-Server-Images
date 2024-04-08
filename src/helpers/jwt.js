import jwt from "jwt-simple";
import dotenvConfig from "../config/dotenvConfig.js";
import dayjs from "dayjs";

const secret = dotenvConfig.session.SECRET_JWT;

export const createToken = (admin) => {
    const payload = {
        nombre: "Admin",
        iat: dayjs().unix(),
        exp: dayjs().add(1,"days").unix()
    }
    return jwt.encode(payload, secret);
}

export const decodeToken = (token) => {
    const payload = jwt.decode(token, secret);
    if (payload.exp < dayjs().unix() ) return null;
    return payload;
}


