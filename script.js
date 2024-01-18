let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let acBtn = document.getElementById('ac')
let back = document.getElementById('back')
let decimal = document.getElementById('decimal');
let zero = document.getElementById('zero');
let equal = document.getElementById('equal');
let multiply= document.getElementById('multiply');
let percent = document.getElementById('percent');
let divide = document.getElementById('divide');
let negetive = document.getElementById('negetive');
let toggle = document.getElementById('toggle');
let plus = document.getElementById('plus');
let displayContent = document.getElementById('absolute');

one.addEventListener('click', ()=>{
  one.value = 1;
  
})



// array
 let arr = ['apple', 'microsoft', 'meta', 'redmi']
 arr.splice(1, 1, 'banana')
 console.log(arr)