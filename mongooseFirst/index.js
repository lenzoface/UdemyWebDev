const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

main().catch(err => console.log(err));



async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
        console.log('CONNECTION OPEN');
    } catch (err) {
        console.log('OH NO, ERORRRRR!');
        console.log(err);
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// const db = mongoose.connection;
// db.once('open', function () {
//     console.log('CONNECTION OPEN!!')
// })


const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    score: Number,
    rating: String
});

// model(Movie) name must be singular and 1st letter is Capital, and collection will be plural (movies)
const Movie = mongoose.model('Movie', movieSchema);
// const gatsby = new Movie({name: 'Gatsby', year: 2009, score: 8.4, rating: 'R'});
// movies.save();


// Movie.insertMany([
//     { name: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { name: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { name: 'The Iron Me', year: 1999, score: 7.5, rating: 'R' }
// ])
//     .then(data => {
//         console.log('IT WORKEDDD!!!')
//         console.log(data)
//     })

//Finding in node:
// Movie.find({score: {$gte: 8}}).then(data => console.log(data))
// Updating in node:
// Movie.updateOne({name: 'Amelie'}, {rating: 'PG-13'}).then(res => console.log(res))
// Deleting:
//  Movie.remove({name: {$in: ['Amelie', 'Alien']}}).then(msg => console.log(msg))


// {name: {$in: ['', '']}}


