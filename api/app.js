const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

// Routes
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

app.use('/api', apiRouter);

// 404
app.use((req, res, next) => {
    res.status(404).send('Sorry Not Found Request');
});

app.listen(port, () => {
    console.log(`express server is running at http://localhost:${port}/`);
});
