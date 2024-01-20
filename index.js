// const express = require('express');
import express from 'express';
import moviesRouter from './routes/movies.js';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.json());


// get(path,callback)
app.get('/', (req, res) => {
    console.log("We are in the home page");
    res.send("Hello World!");
});
app.use('/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});