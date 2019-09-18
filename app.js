////melkadze
///new hw repo

///hw #4
//global
var a = 1;
let b = 2;
const c = 3;

/*
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('funct scope: ', a, b, c);
}
*/

/*
if (1) {
    //block scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('block/if scope: ', a, b, c);
}
*/

for (var a = 0; a < 10; a++) {
    console.log(`loop: ${a}`)
}

console.log('global scope: ', a, b, c);