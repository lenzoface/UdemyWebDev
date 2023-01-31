const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
        console.log('CONNECTION OPEN');
    } catch (err) {
        console.log('OH NO, ERORRRRR!');
        console.log(err);
    }
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        enum: ['L', 'M', 'S']
    }
})

// const Product = mongoose.model('Product', productSchema);

// const bike = new Product({
//     name: 'Bike Helmet',
//     price: 29.50,
//     categories: ['Four Wheel', 'One Wheel', 'Two Wheel']
// })
// bike.save()
//     .then(data => {
//         console.log('IT WORKED!')
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('OH NO ERROR')
//         console.log(err);
//     })




//!!! Когда обновляем и тп, нужно писать "runValidators: true", чтобы ограничения сохранялись, те которые указали в Схеме: !!!//

// Product.findOneAndUpdate({ name: 'Bike Helmet' }, { size: 'M' }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WORKED!')
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('OH NO ERROR')
//         console.log(err);
//     })


// productSchema.methods.greet = function () {
//     console.log('HELLOOOO HERREEEE!!!');
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))


// findProduct();