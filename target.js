// to show html element i.e <li>...</li>
document.addEventListener('click',(event) =>
{
console.log(event.target);
})


// to show html tag name in capital i.e <LI>
document.addEventListener('click',(event) =>{
  console.log(event.target.tagName);
})
