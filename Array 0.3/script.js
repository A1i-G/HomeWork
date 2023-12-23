// // Class task
// // 1.id,age,surname,name,(nested:address - street,city,country)
// // 2.sum all index with reduce method
// // 3.sort by age (asc)
// // 4.sort by street (desc)
// // 5.reverse
// // 6.filter only name (where name length is equal 6 or higher)
// // 7.find first object where age is greater than 25
// // 8.create a new array which add 'myAge' word in front of age item
// const info = [
//     {
//         id: 12,
//         name: 'Ali',
//         surname: 'Gasanov',
//         age: 18,
//         adress: {
//             street: "Breston",
//             City: 'NYC',
//             country: 'US',

//         }
//     },
//     {
//         id: 13,
//         name: 'Vali',
//         surname: 'Demirov',
//         age: 17,
//         adress: {
//             street: "Bakers",
//             City: 'London',
//             country: 'UK',
//         },
//     },
//     {
//             id: 13,
//             name: 'Vali',
//             surname: 'Demirov',
//             age: 17,
//             adress: {
//                 street: "Bakers",
//                 City: 'London',
//                 country: 'UK',
//             },
//         },
//         {
//             id: 13,
//             name: 'Vaeeli',
//             surname: 'Demirov',
//             age: 30,
//             adress: {
//                 street: "Bakers",
//                 City: 'London',
//                 country: 'UK',
//             },
//         }
//     ]



// let result1 = info.reduce((acc, curr, index) => acc + index, 0);
// console.log(result1);

// const result2 = info.sort((a, b) => a.age - b.age)
// console.log(result2)

// const result3 = info.sort((a, b) => b.adress.street - a.adress.street)
// console.log(result3)

// const rev = info.reverse()
// console.log(rev);

// const rev1 = info.filter((item, index) => item.age > 25)
// console.log(rev1);

// const rev2 = info.find((item, index) => item.name.length >= 6)
// console.log(rev2);

// const rev3 = info.map((item => item.name + ' Is My Name'))
// console.log(rev3);


// let user1 = 'Ulfat'

// let rev6 = user1.slice(0,4).toLowerCase() + user1.slice(-1).toUpperCase() 
// console.log(rev6);

// let rev5 = user1.slice(1).toUpperCase()
// console.log(rev5);

// let rev4 =user1.slice(0,2).toLowerCase() + user1.slice(2,3).toUpperCase() + user1.slice(3).toLowerCase()
// console.log(rev4);

// let user = 'ulfat zakirli'

// let rev7 =user.slice(0,1).toUpperCase() + user.slice(1,5).toLowerCase() + user.slice(5,7).toUpperCase() + user.slice(-6).toLowerCase()
// console.log(rev7);

// let rev8 = user.slice(0,6).toLowerCase() + user.slice(6).toUpperCase()
// console.log(rev8);


let person = 'ulfat zakirli'
const personArr1 = person.split('l')
console.log(personArr1);
const personArr2 = person.split(',')
console.log(personArr2);
const personArr3 = person.split(' ')
console.log(personArr3);
const personArr4 = person.split('')
console.log(personArr4);

const studentsArr = ['Yusif', 'Reshad', 'Nihad','Nezire','Metin', 'Heyder', 'Rafig','Eli']

studentsnn = studentsArr.map(item => `name: ${item }`).join()
console.log( studentsnn);









