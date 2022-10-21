import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

// { () => } Cria uma função sem precisar instanciar
app.listen(3000, () => console.log('Server is Running'));