
// const obj2 = {
//     id: 12,
//     name: 'Ali',
//     surname: 'Gasanov',
//     age: 18,
//     adress:{
//         street: "Breston",
//         City: 'NYC',

//     },
//      position: "HR",
//      info: {
//         uni: 'UNEC',
//         qualif: 'PHD',
//         isAdmin: 'true',
//      }
// }
// obj2.name = 'Ronalda'
// obj2.surname = 'Ronaldasur'
// obj2.age = 18
// obj2.info.uni = 'Ronaldau'
// obj2.info.qualif = 'Ronaldaq'
// obj2.info.isAdmin = 'Ronaldai'
// obj2.adress.City = 'Ronaldaa'
// obj2.adress.street = 'Ronaldas'
// obj2.position = 'Ronaldap'

// // console.log(obj2.info.uni);
// // console.log(obj2.info.qualif);
// // console.log(obj2.info.isAdmin);
// // console.log(obj2.position);
// // console.log(obj2.adress.street);
// // console.log(obj2.adress.City);
// // console.log(obj2.age);
// // console.log(obj2.name);
// // console.log(obj2.surname);
// // console.log(obj2.id);
// // delete obj2.isAdmin
// // delete obj2.position


// // console.log(obj2.age + obj2.id);
// // console.log(obj2.age * obj2.id);



// // console.log(arr2[arr2.length - 1 ]); 'lastvalue'
// // console.log(arr2.at(-1));

// // arr2 = ['Ali',7658,548,undefined,777,666,'gd',true,'ggd']
// // console.log(arr2.at(-7));
// // console.log(arr2.at(-2));
// // console.log(arr2[2]);
// // console.log(arr2[7]);
// // console.log(arr2[arr2.length - 7]);  
// // console.log(arr2[arr2.length - 2 ]); 




// // nums.push(undefined)
// // nums.pop(undefined)
// // nums.unshift(undefined)
// // nums.shift(undefined)


// const numbers = [1, true]
// numbers.push(2,NaN)
// numbers.unshift(5, 6)
// numbers.pop()
// numbers.shift()
// console.log(numbers);

 students= [{
    id: 1,
        name: 'Ali',
    surname: 'Gasanov',
    age:18,
    

},
{
    id: 2,
        name: 'Vali',
    surname: 'Axundov',
    age:23,
    

},
{
    id: 3,
        name: 'Anar',
        surname: 'Abbasov',
        age:26,
},
{
        id: 4,
        name: 'Ali',
    surname: 'Axundov',
    age:18,
   
},
]

    // students.map((item,index)=> console.log(item.id + item.age))


// const result = students.filter(item => item.age >= 22 && item.age >= 25 )

// let sum=0

// const result = data.map((item,index) => sum += item.age) 
// const sum = data.map((item) => sum += item.age) 

// mult(id)
// sub(index)

// console.log(sum);
// console.log(result);


const result1 = students.find(item => item.surname == "Gasanov" )

const result = students.findLast(item => item.surname == "Axundov" )

console.log(result);
console.log(result1);









