import mongoose from "mongoose";
import config from "../config/dotenvConfig.js";

const MONGO_USER = config.database.MONGO_USER;
const MONGO_PASSWORD = config.database.MONGO_PASSWORD;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.rvl2uyz.mongodb.net/app-bordados?retryWrites=true&w=majority`;

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DataBase Conected");
    } catch (error) {
        console.log("Error en conect database");
        throw new Error("Can not connect to the database")
    }
}

export default connection;