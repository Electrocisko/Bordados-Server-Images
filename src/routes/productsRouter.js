import express from "express";
import upLoader from "../helpers/imageLoader.js";
import {getProducts, createProduct, getProductsCat, deleteProductById, modifiedProductById} from "../controllers/productsControllers.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/productos", getProducts); // Publico
router.get("/productos/:cat", getProductsCat); //Publico

router.post("/ingresar", auth , upLoader.single("file"), createProduct); // Privado

router.delete("/eliminar/:id", auth, deleteProductById); //Privado

router.patch("/modificar/:id", auth, upLoader.single("file"), modifiedProductById); //Privado



export default router;
