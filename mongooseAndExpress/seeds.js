const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

const Product = require('./models/product');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
        console.log('MONGO CONNECTION OPEN');
    } catch (err) {
        console.log('OH NO, MONGO ERORRRRR!');
        console.log(err);
    }
}

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// }) 
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(e => {
//         console.log(e);
//     })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Special Watermelon',
        price: 7.59,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.70,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 2.69,
        category: 'dairy'
    },
    {
        name: 'Sour Ceam',
        price: 4.50,
        category: 'dairy'
    }
]

// Если что-то не пройдет требования, то ничего не будет выгружено в базу данных, используя insertMany():
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })