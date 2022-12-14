import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { AppDataSource } from './database/AppDataSource';
import { personRouter } from './routes/PersonRoutes';

AppDataSource.initialize()
    .then(() => console.log('Data Source has been initialized.'))
    .catch((e) => console.error('Erro during Data Source inicialization', e));

const app = express();
app.use(express.json());

app.use('/api/person', personRouter);
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
    return res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

export { app };