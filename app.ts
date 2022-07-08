import express, {Response, Request, Express, response, NextFunction} from 'express';
import sequelize from "./database/sequelize";
import bodyParser from 'body-parser';
import routes from './api/routes/index'
import { request } from 'http';
import {AppError} from './utils/AppError'

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req : Request, res:Response)=>{
    res.send('Hello world express + typescript!!');
})

app.use((err: AppError, req: Request, res: Response, next: NextFunction) =>{
    console.log(err.stack);
    res.status(404).send('Something broke!');
})

app.listen(port,
     () =>{
        console.log(`Servidor Rodando na porta ${port}`);
});

sequelize();


