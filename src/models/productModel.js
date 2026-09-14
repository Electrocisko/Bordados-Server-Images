import mongoose  from "mongoose";
const {Schema, model} = mongoose;

const mercadoLibreUrlError = "La URL debe ser una publicación válida de Mercado Libre.";

export const isValidMercadoLibreUrl = (value) => {
    if (!value) return true;

    try {
        const url = new URL(value);
        const hostname = url.hostname.toLowerCase();
        const isMercadoLibreDomain = hostname === "mercadolibre.com.ar" || hostname.endsWith(".mercadolibre.com.ar");
        const isMeliDomain = hostname === "meli.la" || hostname.endsWith(".meli.la");

        return (url.protocol === "http:" || url.protocol === "https:") && (isMercadoLibreDomain || isMeliDomain);
    } catch {
        return false;
    }
};

const productSchema = new Schema({
    modelo: String,
    categoria: String,
    descripcion:String,
    precio: Number,
    image: String,
    public_id: String,
    iat: String,
    nostock: Boolean,
    mercadoLibreUrl: {
        type: String,
        trim: true,
        validate: {
            validator: isValidMercadoLibreUrl,
            message: mercadoLibreUrlError,
        },
    },
})

export  const Product = model("product", productSchema);