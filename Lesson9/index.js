// // Read:truy xuat
// cach 1 :khi biet ro Key
// console.log(computer.mot)
// cach2 :dung khi key dang la 1 gia trij cua 1 bien khac
// console.log(computer['mot'])

// Update

// const studen ={
//     name:'nguyen van a',
// };
// console.log(studen);
// studen['name']='tran thi B';
// studen.age=15;

// const listStudent=[
//     {
//         name:'nguyen van a',
//         gender:'girl',
//     },
//     {
//         name:'nguyen van a',
//         gender:'girl',
//         skills:['c++'],
        
//     },

// ]

// console.log(listStudent[1].skills[0]);
// for(let key in listStudent){
//     console.log(listStudent[key]);
// }


// const arr1 =[1,2,3];
// const arr2=[];
// for(let element of arr1){
//     console.log(element);
// }

// arr1[2]=33;
// console.log('arr1: ',arr1);

// console.log('arr2: ',arr2);

// function testFn (name) {
//     const result = "Hello word, "+name ;

//     console.log(result);
  
// }
// testFn('nguyen van a');

// function test(a,b){
//     return(a+b)**2;
    
// }
// console.log(test(12,2));









//Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
//Hãy tìm nghiệm của phương trình a.x ^ 2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
// function tinhPT(a, b, c) {
//     let delta = b ** 2 - 4 * a * c;
//     let answer = []
//     if (delta > 0) {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         answer = [x1,x2]
//     } else if (delta === 0)
//     {
//         let x = -b / (2 * a);
//         answer=[x]
//     }
//     return answer;
// }

// let a = Number(prompt("Nhap so thu 1"));
// let b = Number(prompt("Nhap so thu 2"));
// let c = Number(prompt("Nhap so thu 3"));

// let solutions = tinhPT(a, b, c);
// console.log(solutions);

//Khai báo 1 function với đầu vào là 3 số a, b, c.
//Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không.Nếu tạo thành tam giác, đầu ra là true.Ngược lại, đầu ra là false.
// function isTriangle(a, b, c) {
//     if (a > 0 && b > 0 && c > 0) {
//     if (a + b > c && a + c > b && b + c > a) {
//       return true;
//     }
//   }
//   return false;
// }
// let a = Number(prompt("Nhap so thu 1"));
// let b = Number(prompt("Nhap so thu 2"));
// let c = Number(prompt("Nhap so thu 3"));
// let solutions = isTriangle(a, b, c);
// console.log(solutions);

//Khai báo 1 function với đầu vào là day, month, year. 
//Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// function isValid(day, month, year) {
//     if (year > 0 && month >= 1 && month <= 12) {
//         let lastDayInMonth = new Date(year, month, 0).getDate(); 
//         if (day >= 1 && day <= lastDayInMonth) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isValid(29, 2, 2022))



