import express from 'express';
import routes from './routes';

const PORT = process.env.API_PORT || 3030;

const app = express();
app.use(express.json()); // Add JSON body parsing

app.get('/', async (_, res) => {
    res.send('Hello, world!');
});

app.use('/users', routes.users);

app.listen(PORT, () => {
    console.log('Server listening at port %d...', PORT);
});
