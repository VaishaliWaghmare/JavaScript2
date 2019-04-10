// Creating a search engine in Grocery store and displaying the appropriate messages
//and finally quitting the search program.

var inStockFruits = ["apple", "mango", "grapes", "chiku", "papita", "banana"];
var search;

function print(message)
{
  document.write('<p>'+message+'</p>');
}

while(true)
{
  search = prompt("Please enter 'list' to few all items available in stock, 'quit' to exit the search, or item to be searched.");
  search = search.toLowerCase();
  console.log(search);

  if(search === 'quit')
  {
    break;
  }

  else if(search === 'list')
  {
    print(inStockFruits.join(","));
  }

  else
  {
    if(inStockFruits.indexOf(search)>-1)
    {
      print(search + "is available in stock");
    }


  else
  {
    print(search + "is available in stock");
  }
}
}
