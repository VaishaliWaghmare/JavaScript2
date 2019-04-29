const divList = document.getElementById('list');
const listitem = document.getElementsByTagName('li');

for(let i = 0 ; i <listitem.length; i++)
 {

  divList.addEventListener('mouseover',() =>
  {
      listitem[i].textContent = listitem[i].textContent.toUpperCase();
  });

   divList.addEventListener('mouseout',() =>
   {
       listitem[i].textContent = listitem[i].textContent.toLowerCase();
  });

}

//bubble concept

//Add new list item
const inputItem = document.querySelector('input.additem');
const additemButton = document.querySelector('button.additem');
const removeitemButton = document.querySelector('button.removeitem');


additemButton.addEventListener('click',() =>
{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = inputItem.value;
  ul.appendChild(li);
  inputItem.value = '';

})

//remove list item
removeitemButton.addEventListener('click',() =>
{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);

})


//on new added list item perform mouseover event with bubble concept
divList.addEventListener('mouseover',(event) =>
{
    if(event.target.tagName == 'LI')
    {
      event.target.textContent = event.target.textContent.toUpperCase();
    }
});

divList.addEventListener('mouseout',(event) =>
{
    if(event.target.tagName == 'LI')
    {
    event.target.textContent = event.target.textContent.toLowerCase();
    }
 });
