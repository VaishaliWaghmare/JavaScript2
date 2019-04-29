const myToggleButton = document.getElementById('toggleButton');
const divList = document.getElementById('list')
const myHeading = document.getElementById("myHeading");
const input = document.querySelector('input');
// const p = document.querySelector('p.description');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const inputItem = document.querySelector('input.additem')
const additemButton = document.querySelector('button.additem')
const removeitemButton = document.querySelector('button.removeitem')
let listl = list.children;

// let firstlistItem = list.firstElementChild;
// let lastlistIteam = list.lastElementChild;
//
// firstlistItem.style.color = "orange";
// lastlistIteam.style.color = "yellow";

// Assignment --> remove the property


console.log(listl)

for(let v = 0 ; v< listl.length ; v++)
{
    addbuttonofListitems(listl[v]);
}
// Adding new item
additemButton.addEventListener('click',() =>
{
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li')
  li.textContent = inputItem.value;
  // remove the code from html
  addbuttonofListitems(li);
  ul.appendChild(li)
  inputItem.value = '';
  // Auto clearing the input
})


function addbuttonofListitems(li)
{
  divList.addEventListener('click',(event) =>
 {

   if(event.target.tagName == 'BUTTON')
   {
     if(event.target.className === 'remove')
     {
       let li = event.target.parentNode;
       let ul = li.parentNode;
       ul.removeChild(li);
     }
     if(event.target.className === 'up')
     {
       let li = event.target.parentNode;
       let prevli = li.previousElementSibling;
       console.log(li.previousElementSibling);
       let ul = li.parentNode;
       if(prevli)
       {
         ul.insertBefore(li,prevli);
       }
     }
     if(event.target.className === 'down')
     {
         let li = event.target.parentNode;
         let nextli = li.nextElementSibling;
         let ul = li.parentNode;
         if(nextli)
         {
           ul.insertBefore(nextli,li);
         }
       }
   }
 });
}
