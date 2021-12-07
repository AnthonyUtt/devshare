import express from 'express';
import { Sequelize } from 'sequelize';

const PORT = process.env.API_PORT || 3030;

const db = process.env.POSTGRES_DB || '';
const user = process.env.POSTGRES_USER || '';
const password = process.env.POSTGRES_PASSWORD || '';

const sequelize = new Sequelize(db, user, password, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
});

const app = express();

app.get('/', async (_, res) => {
    try {
        await sequelize.authenticate();
        console.log('Connection to DB established');
    } catch (error) {
        console.error('Unable to connect to DB: ', error);
    }
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log('Server listening at port %d...', PORT);
});
