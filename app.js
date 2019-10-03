////melkadze
////hw repo



///code for cool html console logging (thank you stack overflow)

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



///hw #1
//console.log(`today is ${day}`);

/*
let x = Boolean('false');
console.log(x);
*/

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
    console.log('hello'); */
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