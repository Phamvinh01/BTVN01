//bai 4
// let n = Number(prompt('nhap n'));
// gt = 1;
// while((n<0)){
//     n = Number(prompt('khong co giai thua am, nhap lai n'))
// }
// if(n==0){
//     console.log(gt);
// }
// else{
//     for(let i = 1; i<=n; i++){
//         gt=gt*i;
//     }
//     console.log(gt);  
// }


// bai5
// let x= Number(prompt('nhap x'));
// let a= Number(prompt('nhap a'));
// let b= Number(prompt('nhap b'));
// while((a>b)||(x>b)||(a<0)||(b<=0)||(x<=0)){
//     x = Number(prompt('nhap lai x'));
//     a= Number(prompt('nhap lai a'));
//     b= Number(prompt('nhap lai b'));
// }
// for(let i=a;i<=b;i++){
//     if(i%x==0){
//         console.log(i);
//         break;
//     }
// }


// bai 6
// let n = Number(prompt('nhap n'));
// let S = 0;
// while(n<2){
//     n = Number(prompt('nhap lai n'));
// }
// for(let i =1;i<n;i++){
//     S = S + (1/(i*(i+1)));
// }
// console.log(S);


// //bai 7
// let n = Number(prompt('nhap n'));
// while(n<=0){
//        n = Number(prompt('nhap lai n'));
//      }
// for(i=1;i<=n;i++){
//        if(n%i==0){
//         console.log(i);
//        }
// }


// //bai 8
// let n = Number(prompt('nhap n'));
// if(n<2){
//            console.log('n khong phai so nguyen to');
//          }
//   for(let i = 2;i<=(n/2);i++){
//       if(n%i==0){
//         console.log('n khong la so nguyen to');
//         break
//       }
//       else{
//         console.log('n la so nguyen to');
//       }
//   }

// //bai 9
// let s = prompt('nhap chuoi s');
// let l = Number(prompt('nhap so l'));
// while(s.length<l){
//     s= '0'+s;
// }
// console.log(s);


// //bai 10
// let n = Number(prompt('nhap n'));
// let m = Number(prompt('nhap m'));
// while((n<=0)||(m<=0)){
//     n = Number(prompt('nhap lai n'));
//     m = Number(prompt('nhap lai m'));
// }
// for(let i = 2;i<=(m*n);i++){
//     if((m%i==0)&&(m%i==0)){
//           console.log('UCLN la',i);
//           break
//     }
// }


// //bai 11
// let n = Number(prompt('nhap n'));
// let m = Number(prompt('nhap m'));
// while((n<=0)||(m<=0)){
//     n = Number(prompt('nhap lai n'));
//     m = Number(prompt('nhap lai m'));
// }
// for(let i = 1;i<=(m*n);i++){
//     if((i%m==0)&&(i%n==0)){
//           console.log('BCNN la',i);
//           break
//     }
// }


// //bai 12
// let correct = Math.floor(Math.random()*20)+1;
// let n = Number(prompt('nhap n'));
// for(let i=1;i<=5;i++){
//     if(n==correct){
//         console.log('Doan dung');
//     }
//     else if(n!=correct&&i<5){
//         n = Number(prompt('nhap lai n'));
//     }
//     else if(n!=correct&&i==5){
//         console.log('Ban da thua cuoc');
//     }
// }
// console.log('Dap an la',correct);


// //bai 13
// let n = Number(prompt('nhap n'));
// while((n<2)||(n>10)){
//          n = Number(prompt('nhap lai n'));
//     }
// for(let i=1;i<=10;i++){
//     console.log(n+' x '+i+" = "+n*i);
// }
// 14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// function hinh_vuong(n) {
//     if (n >= 2) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= n; j++) {
//                 console.log('*');
//             }
//             console.log('\n');
//         }
//     }
// }
// console.log(hinh_vuong(5));
// 15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// function hinh_chu_nhat(m,n) {
//     if (n >= 2) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= m; j++) {
//                 console.log('*');
//             }
//             console.log('\n');
//         }
//     }
// }
// console.log(hinh_chu_nhat(4,3));

//16.
// let n=Number(prompt('Nhap n'));
// for(let i=1; i<=n;i++);
// {
//     for(let j=1;j<=n;j++); 

// }