function n() {
    try {
        const hello = document.querySelector('.clc').innerHTML = 'WORLD'
        console.log('hello')
    } catch (err) {
        console.log('ERROR!!!')
        console.log(err)
        document.querySelector('.cl').innerHTML = 'ERROR!!!!!!'
    }
}

n();