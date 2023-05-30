const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
if (inputBox.Value === ''){
alert ("tou must write something!");
}
else{
let li = document.createElement("li");
li.innerHTML = inputBox.Value;
listContainer.appendChild(li);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);
}
inputBox.Value = "";
saveData();
}
listContainer.addEventListener("click",function(e){
if (e.target.tagName === "LI") {
e.target.classlist.toggle("checked");
saveData();

}
else if (e.target.tagName === "SPAN"){
e.target.parentElement.remover();
saveData();
}

},false);
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
listContainer.innerHTML = localStorage.getItem("data");
}
function showTask()