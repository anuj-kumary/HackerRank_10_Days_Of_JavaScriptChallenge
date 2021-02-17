'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
   
 */
let memoization = [0, 1];

const factorial = (n) => {
    (typeof memoization[n] !== 'number') && (
        memoization[n] = (n - 1) > 0 ? n * factorial(n - 1) : 1 
    );

    return memoization[n];
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}