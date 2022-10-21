import express from 'express';
import { AppDataSource } from './database/AppDataSource';
import { personRouter } from './routes/PersonRoutes';

AppDataSource.initialize()
    .then(() => console.log('Data Source has been initialized.'))
    .catch((e) => console.error('Erro during Data Source inicialization', e));

const app = express();
app.use(express.json());

app.use('/api/person', personRouter);

export { app };