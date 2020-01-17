"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var easy = __importStar(require("./easy"));
var medium = __importStar(require("./medium"));
todo_1.todo();
console.log("Easy 1");
easy.fizzBuzz();
console.log("\n\nEasy 2");
easy.leapYear(1600);
easy.leapYear(2000);
easy.leapYear(1500);
easy.leapYear(2004);
easy.leapYear(2008);
easy.leapYear(2010);
console.log("\nEasy 3.1");
easy.n1(3);
easy.n1(4);
easy.n1(6);
console.log("\nEasy 3.2");
easy.n2(3);
easy.n2(4);
easy.n2(6);
console.log("\nEasy 3.3");
easy.n3(1);
easy.n3(2);
easy.n3(3);
easy.n3(4);
easy.n3(5);
console.log("\nEasy 3.4");
easy.n4(1);
easy.n4(2);
easy.n4(3);
easy.n4(4);
easy.n4(5);
console.log("\nEasy 3.5");
easy.n5(1);
easy.n5(2);
easy.n5(3);
easy.n5(4);
easy.n5(5);
easy.n5(9);
console.log("\nEasy 3.6");
easy.n6(1);
easy.n6(2);
easy.n6(3);
easy.n6(4);
console.log("\nMedium 1");
medium.prime(20);
