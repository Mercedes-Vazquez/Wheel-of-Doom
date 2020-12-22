# WHEEL OF DOOM
## INTRODUCTION 
The project consists of a selection system that randomly picks a name out of a list. Once it has been picked it cannot be picked again until all the names that are part of the list have been chosen. Those that have already been selected must remain on screen. The mouse acts as our selector. By clicking on the image with the left button a name will appear on it. When we click once again on the image a new name will appear on it and the previous one will move to the left side of the screen.   
## TECHNOLOGIES USED
Visual Studio Code as the code editor, JavaScript for functionality, HTML for structuring how the web page elements are displayed, CSS for giving style to the elements displayed on the web page
CODE EXAMPLES
let names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];
let selected = [];

function chooseName(){
    let n = names.length;
    let i = Math.floor(Math.random()*n);
    let selectedName = names[i];
    document.getElementById("contestantName").innerHTML = selectedName;
