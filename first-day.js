/*
***Mastery level teachings***
*****************************
1. Variables
2. expressions ('string', integers, booleans)
3. functions
4. loops
5. Conditions
6. array []
7. objects {}
8. indexes[0]
9. var, const, let
*/


//Variable explained
//What is a variable?
//What are the types of variables?
//How can I use a variable?

// let array = [1,2,3,4,5]
// console.log(array[0])

//Data types: 'string', integers, booleans, symbols, undefined, null
//Example shoes
// let box = 'jordan 1 shoes';
// let copyOfBox = box
// copyOfBox = 'string '
// console.log("🚀🇧🇷🔫 ~ copyOfBox : ⬅️ variable:", copyOfBox);

// let box2 = '1'
// console.log(box2.concat(+1));
// console.log(box + 1);

// let array = [1, 'string', ['array'], () => {}, true, false]
// let arrayObj = {
//     name: 'bob',
//     age: 'value',
//     car: 'value',
//     fish: 'value',
//     dog: 'value'
// }
// console.log(arrayObj.name)
// function bob(num1, num2) {}
// console.log(bob(5,'101'))

let array = [1,2,3,4,5];
// let arrayEmpty = []
console.log(3 + 6)
function addSum(banana) {
    let total = 0;
    for (let i = 0; i < banana.length; i++) {
        total = total + array[i]
    }
        return total;
};

// console.log(addSum())
