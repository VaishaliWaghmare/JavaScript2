


const inputItem = document.querySelector('input.additem')
const additemButton = document.querySelector('button.additem')
const removeitemButton = document.querySelector('button.removeitem')


additemButton.addEventListener('click',() =>
{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li')
  li.textContent = inputItem.value;
  ul.appendChild(li);
  inputItem.value = '';

})


removeitemButton.addEventListener('click',() =>
{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child')
  ul.removeChild(li)

})
