//Express app setup for Meal Maker app

const express = require('express');

const { NotFoundError } = require("./expressError");

const routes = require('./routes');

const app = express();

const cors = require('cors');

app.use(cors());
app.use(routes);


/** 404 handler */

app.use((req, res, next) => {
    return next(new NotFoundError());
});

/** General error handler */

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;