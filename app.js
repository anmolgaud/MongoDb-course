const express = require('express');
require('dotenv').config()
const app = express();

app.use('/', (req, res, next) => {
    res.status(200).send('Hello from server!');
});


app.listen(process.env.PORT, () => {
    console.log('Server started on port: ', process.env.PORT);
});

