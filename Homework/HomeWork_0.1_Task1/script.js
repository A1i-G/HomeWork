
// // Task 1
// console.log(12+8);

// console.log(10/2);

// let num1 = 20
// let num2 = 17
// console.log(20+17);

// let name = 'Ali'
// let surname= 'Hasanov'
// let year= '2005'
// let info = name + surname + year;
// console.log(info);

// let d1= 17
// let d2 = 12
// console.log(17%12);

// cityName= 'Baku'
// cityName= 'Gence'
// console.log(cityName);

// // Task 2

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); //2
// console.log(d); //1
// console.log(b); //2

// Task 3

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // 5

// Task 4
// console.log('test1', test); Error

// {
//     let test = "something"
// //     console.log('test2', test);
// // } test2 , something

// console.log('test3', test); Error



// console.log('test1', test);  // Error
// {
//     var test = "something"
//     console.log('test2', test); //  test2 , something
// }
// console.log('test3', test); // Error


// Task 5 

//Find the type of all the following cases

// let name = "Ulfat" string
// let surname = Zakirli variable
// let year = 2000 number
// year = "2000" string
// let city; undefined
// let qualification = null; null
// let obj = { name: 'ulfat' } object
// let arr = ['a', 'b', 'c'] array

// // Task 6 
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// const sum = arr1.reduce((acc, num) => acc + num);
// console.log(sum);

// arr1.push(10, 88);
// console.log(arr1);

// arr1.splice(0, 2);
// console.log(arr1);

// arr1.unshift(0, 9, 11);
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// // Task7

// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// // console.log(arr2.slice(2, -1));

// arr2.unshift = ('Rovshan')
// let rev4 =arr2.slice(0,3) + ',Rovhshan,' + arr2.slice(5)
// console.log(rev4)

// arr2.map(name => console.log(name));
// console.log(name);

// console.log(arr2.filter(name => name === 'Anar'));

//  console.log(arr2.filter(name => name !== 'Anar')+',Perviz');

// console.log(name);

// console.log(arr2[arr2.length - 2]);

// console.log(arr2.length);


// Task8

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// const numbers = arr3.filter(item => typeof item === 'number');
// console.log(numbers);

// const True = arr3.filter(item => typeof item === 'boolean' && item === true);
// console.log(True);

// const falsy = arr3.filter(item => typeof item === 'boolean' && item === false);
// console.log(falsy);

// const strings = arr3.filter(item => typeof item === 'string');
// console.log(strings);


// // // Task8
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// const even = numbers.filter(number => number % 2 === 0);
// console.log(even);

// const odd = numbers.filter(number => number % 2 !== 0);
// console.log(odd);

// Task9

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

const rev1 = arr4.filter((item, index) => arr4 > 0)

const rev2 = arr4.filter(value => value === true);

console.log(rev1);
console.log('True value :'+ rev2);

const tcount = arr4.filter(value => value ==true).length;
console.log(tcount);

const stringcount = arr4.filter(item => item == item ).length;
console.log(stringcount);

const fcount = arr4.filter(item => item === false).length;
console.log(fcount);



// Task10



// const obj2 = {
//     name: "Ali",
//     surname: 'Gasanov',
//     age: 18,
    
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 uniname: "ADNSU",
//             }
//         }
//     }
// }

// obj2.name = 'John'

// console.log(obj2.info.gender);
// console.log(obj2.info.loc.city);

// console.log(obj2.info.loc.education.uniname);





