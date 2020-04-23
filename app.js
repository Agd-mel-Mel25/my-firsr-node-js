'use strict';
let sum = 0;
const number = process.argv[2] || 0;
for (let i = 1; i<= number; i++){
    sum = sum + i;
}
console.log(sum);
