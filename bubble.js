
const heading = document.getElementById('myheading');
const mylist = document.getElementById('list');

const button = document.getElementById('toggleButton');

button.addEventListener('click',() =>
{
  if(mylist.style.display == 'none')
  {
    mylist.style.display = 'block';
    button.textContent = 'Hide Element';
  }
  else
  {
    mylist.style.display = 'none';
    button.textContent = 'ShowElement';
  }
})
