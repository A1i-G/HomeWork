// const name5 = ('Ali,Gasanov,Vusal');
// let tekk = name5.split(',')
// console.log(tekk);
// const name1 = ['Ali', 'Gasanov' ,'Vusal'];

// for (let i=0; i< name1.length;i++ ){
//     namej = name1.join(" ");
//     console.log( 'FullName '+name1[i]);
// }

let number1 = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let reqem5 = 0;

// for (let i = 0; i < number1.length; i++) {
//   if (number1[i] === 5) {
//     reqem5++;
//   }
// }
// console.log(reqem5);

// function cem() {
//         return number1.reduce((acc,curr)=> acc + curr,0)
//     }
//     console.log(cem());
// number1.sort((a, b) => a - b);
// console.log(number1);

// let maxNumber = Math.max(...number1);
// let max = number1.filter(num => num === maxNumber).length;
// console.log(`${max}`);

// let name2l='ali';
// name2= name2l.length;
// let arr22 = number1.includes(name2);
// console.log(`${arr22}`);

// 9 ?

// let index10 = [];
// for (let i = 0; i <number1.length; i++){
//     if (number1[i]===7){
//         index10.push(i);
//     }
// }
// console.log(`${index10.slice(0,1)}`);

// let index11 = [];
// for (let i = 0; i < number1.length; i++) {
//   if (number1[i] === 4) {
//     index11.push(i);
//   }
// }
// console.log(`${index11.join(', ')}`);


// let index9 = [];
// for (let i = 0; i < number1.length; i++) {
//   if (number1[i] === 5) {
//     index9.push(i);
//   }
// }
// console.log(index9.slice(6,9) + index9.slice(0,1));

// let arr = [4, 5, 2, 5, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// console.log(number1.length -arr.length);


// let index24 = [];
// for (let i = 0; i < number1.length; i++) {
//   if (number1[i] === 7) {
//       index24.push(i);
//     }
// }
// function sum24() {
//     return index24.reduce((acc,curr)=> acc + curr,0)
// }
// console.log(sum24());


let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// function users1() {
//     const result = arr2.filter(obj => obj.name.startsWith('t'));
//     return result;
// }

// console.log(users1());

// function users2() {
//     const result = arr2.filter(obj => obj.name.startsWith('t'),);
//     return result;
// }

// console.log(users2());

// function users3() {
//     const result = arr2.filter(obj => obj.name.startsWith('t'),);
//     const result1 = result.filter(obj => obj.name.endsWith('t'),);
//     return result1.length;
// }

// console.log(users3());


// function users5() {
//     const result = arr2.filter(obj => obj.name.startsWith('t'),);
//     return result.reduce((sum, obj) => sum + obj.key, 0);

// }
// console.log(users5());


// function users4() {
//     const result = arr2.map(obj => {
//         if (obj.name.endsWith('e')) {
//             obj.name = 'SuperDev';
//         }
//         return obj;
//     });
//     return result;
// }

// console.log(users4());

// function users6() {
// result= arr2.reduce((max, obj) => (obj.name.length > max.name.length ? obj : max), arr2[0]);
// result2= result.key
// return result2;
// }
// // console.log(users6());



// const longestNameIndex = arr2.reduce((maxIndex, obj, currentIndex) => {
//     if (obj.name.length > arr2[maxIndex].name.length) {
//         return currentIndex;
//     } else {
//         return maxIndex;
//     }
// }, 0);

// const squareOfIndex = longestNameIndex * longestNameIndex;

// console.log(squareOfIndex);


// function users10() {
//     const result = arr2.filter(obj => obj.name.length ===4 );
//     return result;
// }

// console.log(users10());

// function users7() {
//     result = arr2.reduce((max, obj) => (obj.key > max.key ? obj : max), arr2[0]);
//     result2 = result.name
//     return result2;
// }
// console.log(users7());

// 24, 25 ?













