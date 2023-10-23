// console.log(Array.isArray(value))// xem kieu du lieu

// const a=['a','b','c'];

// const b=['a','b','c'];
// console.log(a+b);

// for(let i=0;i<listnumber.length;i++){
//     console.log(listnumber[i]);
// }

// const Array=[0,2,5,6,7];
// for(let i=0;i<Array.length;i++){
//     if(Array[i]%2===0){
//         console.log(Array[i]);
//     }
// };
// let sum=0;
// for(let i=0;i<Array.length;i++){
//     sum=sum+Array[i];
// }
// console.log(sum);

// for(let i=0;i<Array.length;i++){
//     if(Array[i]<min);{
//         min=Array[i];
//     }
// }
// console.log(min);
// Array.push

let listnumber=[30, 27, 6, 13, 19, 50, 2, 8];
// let sum=1;
// for(let i=0;i<listnumber.length;i++){
//     sum=sum*listnumber[i];
// }
// console.log(sum);

//2.
const array2=[];
 for(let i=0;i<listnumber.length;i++){
    if(listnumber[i]%2===0){
        array2.push(listnumber[i]);
    }
}
let min=array2[0];
for(let i=0;i<array2.length;i++){
    if(array2[i]<min){
        min=array2[i];
    }
}
console.log(min);


//4
const sum=0;
for(let number of listnumber){
    sum += number;
}
let avg=sum/length.listnumber;
console.log(avg);


//loc ra cac so nguyen to







