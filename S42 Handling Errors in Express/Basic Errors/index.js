const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./appError');

app.use(morgan('tiny')); // morgan is logger 

app.use((req, res, next) => {
    // req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs'.toUpperCase());
    next();
})

const verifyPass = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'supersecret') {
        next();
    }
    throw new AppError('WORNG PASSWORD, ENTER A REAL ONE', 501);
    // throw new Error('Password required')
    // res.send('WORNG PASSWORD, ENTER A REAL ONE');
})

// app.use((req, res, next) => {
//     console.log('THATS MY FIRST MIDDLEWARE!!');
//     return next();
//     console.log('THATS MY FIRST MIDDLEWARE!! - after calling next()');
// })
// app.use((req, res, next) => {
//     console.log('THATS MY SECOND MIDDLEWARE!!');
//     return next();
// })
// app.use((req, res, next) => {
//     console.log('THATS MY THIRD MIDDLEWARE!!');
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE')
})

app.get('/error', (req, res) => {
    job.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPass, (req, res) => {
    res.send('I WANNA GO TO JAPAN SO BADDDD');
})

// it will show 404 because it is after all the app.***, that's why it does'n need next()   :::
app.use((req, res) => {
    res.status(404).send('ERROR 404, not found'.toUpperCase());
})

// app.use((err, req, res, next) => {
//     console.log('ERROR');
//     console.log('!!!ERROR!!');
//     console.log('ERROR');
//     console.log(err);
//     next(err);
// })

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something Went Wrong :('} = err;
    res.status(status).send(message);
    console.log(err);
})



app.listen(3000, () => {
    console.log('App is running on localhost:3000'.toUpperCase());
})