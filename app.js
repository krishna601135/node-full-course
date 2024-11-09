const fs = require('fs');
const morgan = require('morgan');
const express = require('express');
const movieRouter = require('./Routes/movieRoutes.js');

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

app.use('/api/movies', movieRouter);

module.exports = app;








