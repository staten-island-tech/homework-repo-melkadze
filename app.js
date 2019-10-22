////melkadze
////hw repo



///code for cool html console logging (thank you stack overflow)

/*
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();

*/


///hw #1
//console.log(`today is ${day}`);

/*
let x = Boolean('false');
console.log(x);
*/

/*

let x = '';

if((x !== undefined) || (x !== null) || (x !== 0)) {
    //console.log(`could do this`);
}

if(x){
    //console.log(`but better this`);
}

if([]){
    //console.log(`true`);
}



///hw #2
const color = 'yellow';

switch(color){
    case 'red':
        console.log('red')
        break;
    case 'blue':
        console.log('blue')
        break;
    default:
        //console.log('something else')
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'sunday';
        break;
    
    case 1:
        day = 'i hate mondays';
        break;
    
    case 2:
        day = 'tuesday';
        break;
    
    case 3:
        day = 'wednesday';
        break;
    
    case 4:
        day = 'thursday';
        break;
    
    case 5:
        day = 'friday';
        break;
    
    case 6:
        day = 'saturday';
        break;
}


///hw #3
function greet(firstName = 'John', lastName = 'Doe'){
    /* if(typeof firstName === 'undefined'){firstName = 'John'}
    if(typeof lastName === 'undefined'){lastName = 'Doe'}
    console.log('hello'); */ /*
    return 'Hello ' + firstName + ' ' + lastName;
}
//console.log(greet());

const square = function(x=3){
    return x*x;
};
//console.log(square());

/*
(function() {
    console.log('iifed');
})();
*/
/*

(function(name) {
    //console.log(`hey there ${name}`);
})('bratan');

const todo = {
    add: function(){
        //console.log('add');
    },
    edit: function(id){
        //console.log(`edit ${id}`);
    }
}

todo.delete = function(){
    //console.log('delete');
}

todo.add();
todo.edit(22);
todo.delete();



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

/*
for (var a = 0; a < 10; a++) {
    //console.log(`loop: ${a}`);
}

//console.log('global scope: ', a, b, c);



///hw #6
const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(-3, 3);
val = Math.min(-3, 3, 2, 5, 7, 8);
val = Math.max(-3, 3, 2, 5, 7, 8);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

//console.log(val);



///hw #7
const featured = ['deep', 'pepper', 'hawaiian'];
const specialty = ['meaty', 'spicy', 'marge'];

const pizzas = [...featured, 'veg', ...specialty];
const fridayPizzas = [...pizzas];
//console.log(pizzas);

const deepDish = {
    pizzaName: 'deep',
    size: 'large',
    ingredients: ['mariana', 'saucegg', 'dough', 'cheese']
};

const heading = document.querySelector('.jump');

heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}



///hw #8
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

//const a = alphabet[0];
//const a = alphabet[1];
const [a,, c, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers];

console.log(newArray);

function sumAndMultiply(a, b) {
    return [a+b, a*b, a/b];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3);

console.log(sum);
console.log(multiply);
console.log(division);


const personOne = {
    name: 'Sally',
    age: 32,
    food: 'melon',
    somethingElse: 3
}

const personTwo = {
    name: 'P2'
}

const {name: name2, age, food = 'Rice', ...rest2} = personOne;
const personThree = {...personOne, ...personTwo};

function printUser({name, age, food = 'Rice'}) {
    console.log(`Name is ${name}. Age is ${age}. Food is ${food}`);
}

printUser(personOne);

console.log(personThree);
console.log(name2);
console.log(age);
console.log(food);
console.log(rest2);
*/



//hw #9
async function go() {
    const p1 = fetch('https://api.github.com/users/melkadze');
    const p2 = fetch('https://api.github.com/users/whalensiths');

    //wait for both
    const response = await Promise.all([p1, p2]);
    const dataPromises = response.map(r => r.json());
    const [first, second] = await Promise.all(dataPromises);
    console.log(first, second);
}

go();


async function getData(names){
    const promises = names.map(names => fetch(`https://api.github.com/users/${names}`).then(r => r.json()));
    const people = await Promise.all(promises);
    console.log(people);
}

getData(['melkadze', 'whalensiths']);