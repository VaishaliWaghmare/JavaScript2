function addItem()
{
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id', candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
  candidate.value = '';
}

function removeItem()
{
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
  candidate.value = '';
}

// //This is a call back function delay in 3 sec
// window.setTimeout((something ) =>
// {
//   console.log(something);
// }, 3000, 'Greetings');
//




// document.addEventListener('click',(event) =>{
//   console.log(event.target.tagName);
// });
