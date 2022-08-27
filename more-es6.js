// 1. optional chaining

const users = [ {id: 1, name: 'abul', job: 'doctor'} ]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 

const userFloor = user.address?.stret?.second;
console.log(userFloor);


// 2. map, filter, find

const number = [2, 8, 4, 6, 3];


function getDoubles(number) {
    const output = [];
    for (const numbr of number) {
        const doubled = doubleIt(numbr);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(num){
    return num * 2;
}


const doubleIt = num => num * 2;

const makeDouble = number.map(doubleIt);
const makeDoubleDirect = number.map(num => num * 2)
const makeDouble2 = number.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);
/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const result = getDoubles(number);
console.log(result);
console.log(makeDouble);
//---------------------------------------------
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter( num => num % 2 === 0);
// console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);

//---------------------------------------------

const number1 = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = number1.find(num => num % 5 === 0)
const fivesAll = number1.filter(num => num % 5 === 0);

console.log(fives);
console.log(fivesAll);

const product = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 30000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const cheap = product.find(prodct => prodct.price < 40000);
console.log(cheap)
