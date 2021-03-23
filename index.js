start();
function start(){
    var userName = prompt("What is your name:");
    const tag = document.querySelector('.myClass'); 
    tag.innerText = "Hello" + userName;
}