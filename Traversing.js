//remove html element by click on these

const divList = document.getElementById('list');
divList.addEventListener('click', (event) =>
{
  if(event.target.tagName=="LI")
  {
    let li = event.target; //return html element
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});
