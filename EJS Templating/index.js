const express = require("express");
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs')
    //  We dont need to specify ejs because it is already stated in app.set! //
})

app.get('/cats', (req, res) => {
    const cats = [
        'Dori', 'Enok', 'Melkiy', 'Lemurka', 'Simba'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num: num });
    // res.render('random', {rand: num});
    // num is passed to random as 'rand' 
})



app.listen(8080, () => {
    console.log('listening on port 8080')
})