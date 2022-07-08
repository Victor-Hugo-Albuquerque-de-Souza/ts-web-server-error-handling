//resp por adicionar todas as routas do nosso sistema.
import films from "./FilmRoute";
import express, { Express, Router } from "express";

const app: Express = express();

const routes = express.Router();

routes.use('/films', films);

export default routes;