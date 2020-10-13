'use strict';

function chooseName(){
    let names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri"];
    let i = Math.round(Math.random()*5);
    document.getElementById("contestantName").innerHTML = names[i];
}


