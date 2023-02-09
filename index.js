const prompt = require('prompt-sync')();

console.log('To-Do List');

let command = '';
let response = '';

let allowedCommands = {
    add : 'Adds an item to the list',
    show : 'Shows all tasks',
    remove : 'Choose an item to remove from the list',
    quit : 'Quit the program'
};
let tasks = [];

while (command.toUpperCase() != 'QUIT') {
    response = prompt('Enter command (quit to exit): ');
    command = response.toUpperCase();

    if (command == 'ADD') {
        let task = prompt('Enter task to add: ');
        tasks.push(task);
        console.log(tasks);
    }
    else if (command == 'SHOW') {
        console.log(tasks);
    }
    else if (command == 'REMOVE') {
        console.log('Enter "Y" to remove task shown');
        for (let task in tasks) {
            console.log(tasks[task]);
            let select = prompt('Remove ' + tasks[task] + '? ');
            if (select.toUpperCase() == 'Y') {
                tasks.splice(task, 1);
                console.log(tasks);
                break;
            }
        }
    }
    else if (command == 'HELP') {
        for (let allowed in allowedCommands) {
            console.log(allowed + ': ' + allowedCommands[allowed]);
        }
    }
}