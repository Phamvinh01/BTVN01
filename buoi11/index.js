// console.log(document.getElementById('my-title'))
// console.log(document.getElementsByClassName('title'))
// console.log(document.getElementsByTagName('h1'))


//lay noi dung phan tu:inner HTML,innerText
// console.log(document.getElementById('my-title').innerHTML)
// const number=document.getElementById('my-title').innerHTML;
// console.log(document.getElementById('my-title').innerText)


//thay doi noi dung

// document.getElementById('my-title').innerHTML='<span style="color:red;">da thay doi</span>;'


// document.getElementsByClassName('favorite-list-item')[0].innerHTML="abc";

// let ulLength = document.getElementsByClassName('favorite-list-item')
// for (let i =0; i<ulLength.length;i++)
//     {
//            ulLength[i].innerText='I love this thing' 
//     }   


// for (let i =0; i<ulLength.length;i++){
//     document.getElementsByClassName('favorite-list-item')[i].style.color='red';
// }

// const content='tao 1 noi dung  moi'
// tao the moi
// const tagLi=document.createElement('li');
//  gắn nội dung cho thẻ vừa tạo
// tagLi.innerHTML=content;    
// chỉ định vị trí muốn thêm thẻ vừa tạo
// document.getElementById('favorite-list').appendChild(tagLi);

// function logger(){
//     alert('xin chao');
// }

// document.getElementById('btn').onclick=function(){
//     alert('good bye');
// }

// document.getElementById('btn-bye').addEventListener('click',function(){
//     alert('xin chao```');
// })

// const $image = document.getElementById('image');

// document.getElementById('url').onchange = function()  {
// 	const valueUrl = document.getElementById('url').value;

// 	image.src = valueUrl;
// };


const table = document.getElementById("user-table");
const deleteButtons = table.getElementsByClassName("btn-delete");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    const row = this.parentNode.parentNode;
    row.remove();
  });
}