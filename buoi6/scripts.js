

 // tu khoa var ,let dùng để khởi tạo 1 biến 

// 1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// x = true, y = true, z = false

// x && y && z → F
// x && y && !z → T
// (x && y) || z → T
// (x && y) || !z → T
// x && (y || z) → T
// x && !(y || z) → F
// x && (y || !z) → T
// x && (!y || z) → F


// 2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// name = ‘AAA’, age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ‘ BBB’ = 'AAA BBB'
// !isGood = F

// name == ‘aaa’ && age >= 20 → F
// name != ‘aaa’ && isGood → T
// !(age < 10) && !isGood → F

// 3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// a = 10, b = 20, c = 30, d = '40'

// a + b + c = 60
// a - b / c = 10-2/3
// a - (b * c) = -590
// d - (a * b) - c = -190
// a + b + c + d = 6040 
// d + a + b + c = 40102030 
// d + a - b + c = 4020
// a - b + d - c = -1040-30=-1070
// d - c + a - b = 0
// a * b + d * c = 200+1200=1400


// 4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// x = true, y = false, z = 10

// x && y → F
// x && !y → T
// x && z == 10 → T
// (x && z == 10) → T
// !(x && z == 10) → F
// !(x && z == 50) → T

// x && y && z == 10 → F
// x && !y && z == 10 → T
// x || y || z == 10 → T
// (x && y) || z != 10 → F
// !(x && z == 10) || y → F

// 5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// a = 1, b = '2', c = 3, d = '4'

// b + d = '24'
// a + b + c + d = 1234
// a - b + c - d = -2
// a - b - c + d = '-44'
// (b + d) - (a + c) = 24-4=20
// (a + b) - (c + d) = 12-34=-22
// a * c + b * d = ? 11
// -b + d = '-24'
// -b - d = -6 
// -(b + d) = '-24' 

// 6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// age = 25, isMarried = false, isRich = true

// age > 25 && isMarried && isRich → F
// (age <= 25 || isMarried) && isRich → T
// (age > 10 || isRich) && isMarried → F
// !(age >= 15 && isMarried) && isRich → T
// !(age <= 20) || !(isMarried && isRich) → T
// (age > 8 && !isMarried) || isRich → T
// !(age < 8 && !isMarried) || isRich → T
// (age == 8 && isMarried) || !isRich → F

// const GPA= 7.9;
// if(GPA>=8.0){
//     console.log("hoc sinh gioi")
// }else if(GPA>=6.5 && GPA<8.0){
//     console.log("hoc sinh kha")
// }else if(GPA >=5.0 && GPA<6.5){
//     console.log("hoc sinh trung binh")
// }else{
//     console.log("hoc sinh yeu")
// }


// let w= prompt('Nhập cân nặng của bạn(kg)');
// let h =prompt('Nhập chiều cao của bạn(m)');
// const BMI=w/(h*h);

// if(BMI<18.5){
//     console.log('Nhe can');
// }else if(BMI >=18.5 && BMI <23){
//     console.log('Binh thuong');
// }else if(BMI >=23 && BMI <25){
//     console.log('Thua can');
// }else if(BMI>25){
//     console.log('Beo Phi');
// }

// let sum=0;
// for(let i=1;i<=50;i++){
//     sum=sum+i;
//     console.log(i)
// }
// console.log(sum);

// let sum=0;
// for(let i=-10;i<=50;i++){
//     if(i%2===0){
//         console.log(i)
//         sum=sum+i;
//     }
// }
// console.log(sum);

// for(let i=-100;i<=100;i++){
//     if(i%9===0){
//         console.log(i);
//     }
// }


for(let i=1;i<=500;i++){
    console.log(i);
}
