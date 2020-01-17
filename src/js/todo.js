"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var readlineSync = __importStar(require("readline-sync"));
function todo() {
    var todo = fs_1.readFileSync('todo.txt', 'utf8');
    while (true) {
        var task = readlineSync.question('Enter a task: ');
        if (task === '') {
            break;
        }
        else {
            if (todo.includes(task)) {
                console.log("This task already exists.");
            }
            else {
                fs_1.appendFileSync('todo.txt', task + "\n");
                console.log('Saved ' + task + ' to todo list.');
                todo = fs_1.readFileSync('todo.txt', 'utf8');
            }
        }
    }
    todo = fs_1.readFileSync('todo.txt', 'utf8');
    console.log("\nTodo list");
    console.log(todo);
    var _loop_1 = function () {
        var task = readlineSync.question('Enter a task to remove: ');
        if (task === '') {
            return "break";
        }
        else {
            lines = todo.split('\n');
            lines.forEach(function (element) {
                if (task === element) {
                    lines.splice(lines.indexOf(element), 1);
                    fs_1.writeFileSync('todo.txt', lines.join('\n'));
                }
            });
            todo = fs_1.readFileSync('todo.txt', 'utf8');
        }
    };
    var lines;
    while (true) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    todo = fs_1.readFileSync('todo.txt', 'utf8');
    console.log("\nTodo list");
    console.log(todo);
    readlineSync.question('Press ENTER to exit.');
}
exports.todo = todo;
