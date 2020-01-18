import { readFileSync, appendFileSync, writeFileSync, existsSync } from 'fs';
import * as readlineSync from 'readline-sync';

export function todo() {
    var todo: any = "";
    if (existsSync('todo.txt')) {
        todo = readFileSync('todo.txt', 'utf8');
    }

    while (true) {
        const task = readlineSync.question('Enter a task: ');
        if (task === '') {
            break;
        } else {
            if (todo.includes(task)){
                console.log("This task already exists.");
            } else {
                appendFileSync('todo.txt', task + "\n");
                console.log('Saved ' + task + ' to todo list.');
                todo = readFileSync('todo.txt', 'utf8');
            }
        }
    }

    todo = readFileSync('todo.txt', 'utf8');
    console.log("\nTodo list");
    console.log(todo);


    while (true) {
        const task = readlineSync.question('Enter a task to remove: ');
        if (task === '') {
            break;
        } else {
            var lines = todo.split('\n');
            lines.forEach( (element: any) => {
                if (task === element) {
                    lines.splice(lines.indexOf(element), 1);
                    writeFileSync('todo.txt', lines.join('\n'));
                }
            });
            todo = readFileSync('todo.txt', 'utf8');
        }
    }

    todo = readFileSync('todo.txt', 'utf8');
    console.log("\nTodo list");
    console.log(todo);

    readlineSync.question('Press ENTER to exit.');
}
