// 1.
// function printName(name) {
//     console.log("Hello world, " +  name);
    
// }
// test("Vinh");
// 2.

// function calAb(a,b) {
//     let cal = (a + b)**2;
//     return cal;
// };
// console.log(calAb(2,3));
// calAb(1,2)

// 3.

// function printNumber() {
//     for(;true;) {
//         a = prompt('Nhap a');
//         if (a>0) {
//             break;
//         };
//     };
//     return a;
// };


function printName(a,b,c){
    if (a>0&&b>0&&c>0){
        if(a+b>c&&a+c>b&&b+c>a){
            return true;
        }
    }
    return false;
};
let a = Number(prompt("Nhap so thu 1"));
let b = Number(prompt("Nhap so thu 2"));
let c = Number(prompt("Nhap so thu 3"));
console.log(printName(a,b,c));

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
