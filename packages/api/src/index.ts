import express from 'express';

const PORT = process.env.API_PORT || 3030;

const app = express();

app.get('/', (_, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log('Server listening at port %d...', PORT);
});