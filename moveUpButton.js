
 ullist.addEventListener('click',(event) =>
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
      // if(prevli)
      // {
        ul.insertBefore(li,prevli);
      // }
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
