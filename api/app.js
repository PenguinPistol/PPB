const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

// Routes
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if(process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.json({
        success : true
    });
})

// 404 
app.use((req, res, next) => {
    res.status(404).send('Sorry Not Found Request');
})

app.listen(port, () => {
    console.log(`express server is running at http://localhost:${port}/`);
});