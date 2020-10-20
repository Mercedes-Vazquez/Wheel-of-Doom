'use strict';
//"¡after show the name for a few seconds clean the ball¡"?


let names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri"];
let selected = [];


//Click on a buttom and choose one name
function chooseName(){
    let n = names.length;
    let i = Math.floor(Math.random()*n);
    let selectedName = names[i];
    document.getElementById("contestantName").innerHTML = selectedName;
//Take out the choosen name from the array
    
    names.splice(i, 1);       
    selected.push("<li>" + selectedName + "</li>"); 
    document.getElementById("selectedNames").innerHTML = selected.join('');
    n--;
//When the array name is cero reset the array again

    if (n < 1){
        names = selected;
        selected = [];
    }
    
    console.log(names);
    console.log(selected);
}



