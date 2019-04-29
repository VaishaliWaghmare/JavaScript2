const divList = document.getElementById("list");
const ulList = document.getElementById("ullist");
ulList.addEventListener('click', (event) =>
{
  if(event.target.tagName == "BUTTON")
  {
    let li = event.target.parentNode;
    let ul =  li.parentNode;
    ul.removeChild(li);
  }
})
