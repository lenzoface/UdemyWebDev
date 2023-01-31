const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


// Parsing data
app.use(express.urlencoded({ extended: true }));
// DO NOT FORGET TO PUT PARANTHESES WHILE CALLING A FUNCTION!!!!
app.use(express.json());
app.use(methodOverride('_method'));
// To access the views folder from anywhere:
app.set('views', path.join(__dirname, 'views'));
// Calling EJS:
app.set('view engine', 'ejs');

// fake database
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// Show all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

// Make a new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments })
})

app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    // res.send('IT WORKED!');
    // Redirects to the next path, and make get request:
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    // When indicating a folder, do not put SLASH in front of the first folder! (not /comments/edit)! 
    res.render('comments/edit', { comment })
})

// PUT request updates as a whole, replaces a representation, but PATCH updates only partially:
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req,res)=>{
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})



// TACOS:
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})


// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment