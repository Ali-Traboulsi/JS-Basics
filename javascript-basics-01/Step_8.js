var age;

function growth(aging){
    if(aging < 18){
        window.alert("You are under 18! You have a huge life to make!");
    }
    else if (aging == 18){
        window.alert("You are exactly 18!\nYou have what it take to enter the future.. Go fot it!");
    }
    else{
        window.alert("You are above 18. Keep running the future!");
    }
}

age = window.prompt("enter your age please: ");

growth(age);