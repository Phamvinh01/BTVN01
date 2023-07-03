// x = true, y = true, z = false

// x && y && z → false
// x && y && !z → true
// (x && y) || z → true
// (x && y) || !z → true
// x && (y || z) → true
// x && !(y || z) → false
// x && (y || !z) → true
// x && (!y || z) → false


// name = 'AAA', age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ‘ BBB’ = 'AAA BBB'
// !isGood = false

// name == ‘aaa’ && age >= 20 → false
// name != ‘aaa’ && isGood → true
// !(age < 10) && !isGood → false




// a = 10, b = 20, c = 30, d = '40'

// a + b + c = 60
// a - b / c = 10-2/3
// a - (b * c) = -590
// d - (a * b) - c =  
// a + b + c + d = 10+20+30+"40"=6040
// d + a + b + c = "4010"+20+30=40102030
// d + a - b + c = '4010'-20+30=4020
// a - b + d - c = -1070
// d - c + a - b = 0
// a * b + d * c = 1400




//x = true, y = false, z = 10

// x && y → false
// x && !y → true
// x && z == 10 → true
// (x && z == 10) → true
// !(x && z == 10) → flase
// !(x && z == 50) → true

// x && y && z == 10 → flase
// x && !y && z == 10 → true
// x || y || z == 10 → true
// (x && y) || z != 10 → flase
// !(x && z == 10) || y → flase

// let number a=10;
// let number a='10';

// if(a==b){
//     console.log('hai gia tri bang nhau')
// } else{
//     console.log{'hai gia tri khac nhau'}
// }



// const w =Number(prompt('Moi ban nhap can nang' ));
// const h =Number(prompt('Moi ban nhap chieu cao' ));
// const BMI= w/h*h;

// console.log('BMI',BMI);

// if(BMI<18.5){
//     alert('Nhe can')
// }
// if(BMI>18.5&& BMI<23){
//     alert('Nhe can')
// }
// if(BMI>=23 && BMI<25){
//     alert('Nhe can')
// }
// if(BMI>25){
//     alert('Nhe can')
// }


// if(BMI<18.5){
//     alert('nhe can');
// }else if(BMI>18.5&& BMI<23){
//     alert('binh thuong');
// }else if(BMI>=23 && BMI<25){
//     alert('thua can');
// }else {
//     alert('beo phi');
// }

// for(let i=100; i >= 1;i--){
//     console.log(i);
// }

// for(let i=2 ;i<=100;i=i+2){
//     console.log(i);
// }

// for(let i=1;i<=100;i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


// let theNumber=1;
// while(theNumber<=200){
//     console.log(theNumber);
//     theNumber++;
// }

// let x =101;
// let y=-10;
// while(x<0||x>100|| y <0|| y > 100||x>y){
//     x=Number(prompt('Nhap x'));
//     y=Number(prompt('Nhap y'));
// }

// while(x<=y){
//     console.log('x: ',x);
//     console.log('y: ',y);
// }

//  BAI1
// for(let i=1;i<=500;i++){
//     console.log(i);
// }

//  bai2
// for(i=1;i<=300;i++){
//     if(i %2 ===0 && i %3 ===0){
//         console.log(i);
//     }   
// }

//   BAI 3
let sum=0;
for(i=-30;i<=50;i++){  
    if(i %2 ===0){      
        sum = sum +i;
    } 
}
console.log(sum);



// let number = 1;
// let s =0;
// for (let i = 1; i <=5; i++) {
// s = s+(number/i);
// }