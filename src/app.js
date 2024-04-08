import express from 'express';
import dotenvConfig from './config/dotenvConfig.js';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import viewsRouter from "./routes/viewsRouters.js";
import productsRouter from "./routes/productsRouter.js";
import loginRouter from "./routes/sessionsRouter.js";
import connection from './database/connection.js';
import cors from 'cors';
import cookieParser from "cookie-parser";

const PORT = dotenvConfig.app.PORT;
const app = express();

//midlewars
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
app.use(cookieParser());


// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');

//Conectando a Base de Datos
connection();

// routes
app.use('/', viewsRouter);
app.use('/api', productsRouter );
app.use('/api', loginRouter);

app.listen(PORT, () => {
    console.log('server listening :'+PORT);
})
