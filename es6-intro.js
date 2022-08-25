//1) Write an arrow function that will take 3 parameters, will multiply 
//the parameters and will return the result.

const multiply= (a,b,c) => a*b*c ;
const result = multiply(7,8,9);
console.log(result);


//2) Write the following sentence in three lines and print the result:
//I am a web developer. I love to code. I love to eat biryani.

const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(sentence);

//3) Write an arrow function that will take 2 parameters: One parameter 
//will come from you and the other parameter will be a default 
//parameter. Add these two parameters and return the result.

const add = (c,d=10) => c + d ;
const output = add(3);
console.log(output);


//4) Write an arrow function where it will do the following:
//a) It will take an array where the array elements will be the 
//name of your friends
//b) Check if the length of each element is even, push elements 
//with even length to a new array and return the result
//Print the result.

const friends = ['asif', 'hasan', 'tamim', 'shakib', 'joy', 'rabbi'];
console.log(friends);

const evenFriends = (friends) => {
    const evenLengthFriendNames = [];
    for (let i=0; i < friends.length; i++){
        if(friends[i].length % 2 === 0){
            evenLengthFriendNames.push(friends[i]);
        }
    } 
    return evenLengthFriendNames;
}
console.log(evenFriends(friends));

//5) Write an arrow function where it will do the following:
//a) Square each array element
//b) Calculate the sum of the squared elements
//c) Return the average of the sum of the squared elements
//Print the result. 

const numbers =[2,4,5,6,7,8,9,1,0];

const squaredAverageCalculator = (numbers) => {
    let sumOfSquaredNumbers = 0;
    for (let i = 0; i < numbers.length; i++){
        sumOfSquaredNumbers += numbers[i] * numbers[i];
    }
    return (sumOfSquaredNumbers/ numbers.length).toFixed(2);
}
console.log(squaredAverageCalculator(numbers));


//6) Write an arrow function where it will do the following:
//a) It will take two array inputs
//b) Combine the two arrays and assign them in a new array
//c) Find the maximum number from the new array and return the 
//result
//Print the result. 

const numSet1 = [12,34,25,65,75];
const numSet2 = [34,56,76,235,678];

const max = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    return Math.max(...newArr);
}
console.log(max(numSet1,numSet2));