//program 1
// var b = document.getElementById("myheading");
// console.log(b);
// b.textContent;
// b.textContent = "DOM1";

//program 2
const button = document.getElementById("toggleButton");
const list = document.querySelector("ul");

button.addEventListener('click', () =>
{
  if(list.style.display == "none")
  {
    list.style.display = "block";
    button.textContent = "Hide list";
  }
  else
  {
    list.style.display = "none";
    button.textContent = "show list";
  }
})


// //program 3
// //auto clearing the input
// const myToggleButton = document.getElementById('toggleButton');
// const divList = document.getElementById('list')
// const myHeading = document.getElementById("myHeading");
// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
//
//
// const button = document.querySelector('button');
// const list = document.querySelector('ul');
// const inputItem = document.querySelector('input.additem');
// const additemButton = document.querySelector('button.additem');
// const removeitemButton = document.querySelector('button.removeitem');
// myToggleButton.addEventListener('click', () => {
//
//   if(divList.style.display =='none')
//   {
//     divList.style.display = 'block'
//     myToggleButton.textContent = 'Hide Element'
//   }
//   else
//   {
//     divList.style.display = 'none';
//     myToggleButton.textContent = 'ShowElement'
//   }
// })
//
//
// button.addEventListener('click', () => {
// list.innerHTML = "<li> New list implemented </li>"
// })
//
// button.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.createElement('li');
//   li.textContent = inputItem.value;
//   ul.appendChild(li);
//   inputItem.value = '';
// })
//
// //remove the items
//
// button.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.querySelector('lilast-child');
//   ul.removeChild(li);
// })
