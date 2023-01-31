// confirm('Wanna start?');
let entry = prompt('What would you like to do?');
const list = ['My Todo', 'The list:'];
while (entry !== 'quit' && entry !== 'q') {
    if (entry === 'list') {
        console.log('***************')
        for (let i = 0; i < list.length; i++) {
            console.log(`#${i}: ${list[i]}`);
        }
        console.log('***************')
    }
    else if (entry === 'new') {
        const newTodo = prompt('Add a new item to the list!');
        list.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (entry === 'delete') {
        const index = parseInt(prompt('Ok, enter an index/number to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = list.splice(index, 1);
            // if (deleted > list) {
            //     console.log('There is no such index/number')
            // } else {
            console.log(`You deleted #${index}: ${deleted[0]}`);
            // }
        } else {
            console.log('Unknown index/number')
        }
    }
    entry = prompt('What would you like to do?');
}
console.log('Ok, you quit the app!');
