var name = window.prompt("Enter your name:","");
window.alert("Hello " + name);

function alertWithoutNotice(message){
    setTimeout(function(){
        alert(message);
    }, 1000);
}