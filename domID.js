function changeColor(newColor)
{
 const a = document.getElementById("newid");
 a.style.color = newColor;
}
function changeColor()
{
 const a = document.getElementById("newid").style.color = "red";

}

var testTarget = document.getElementsByClassName("test")[0];
testTarget.style.color = "red";


var b = document.getElementsByTagName("h2")[0];
b.style.color = "purple";
