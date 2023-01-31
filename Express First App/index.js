// import { request } from "express";
// const { response } = require('express');

const { query } = require('express');
const express = require('express');
const app = express();

// app.use((req, res) => {
// console.log('We got a new request')
// console.dir(req);
// res.send('WEve GOT UR REQUEST, THIS IS A RESPONSE')
// })

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!')
})


// /r/SmthHere:
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Looking at the post ID: ${postId} of ${subreddit} subreddit</h1>`)
})



app.post('/cats', (req, res) => {
    res.send('This is a POST request')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})
app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for ${q}</h1>`)
    }
})

// Important to write at the end!! Because it may overwrite orher requests
app.get('*', (req, res) => {
    res.send('ERROR 404, no path like this one :(')
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
});

