const id = setInterval(() => {
    console.log('aughghhh')
}, 1000);

setTimeout(() => {
    clearInterval(id)
}, 5000);