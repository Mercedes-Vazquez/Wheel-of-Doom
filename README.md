# WHEEL OF DOOM
## INTRODUCTION 
The project consists of a selection system that randomly picks a name out of a list. Once it has been picked it cannot be picked again until all the names that are part of the list have been chosen. Those that have already been selected must remain on screen. The mouse acts as our selector. By clicking on the image a name will appear on it. When we click once again on the image a new name will appear on it and the previous one will move to the left side of the screen.   
## TECHNOLOGIES USED
Visual Studio Code as the code editor, JavaScript for functionality, HTML for structuring how the web page elements are displayed, CSS for giving style to the elements displayed on the web page
## CODE EXAMPLES
let names = ["Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];

let selected = [];

function chooseName(){
    
    let n = names.length;
    
    let i = Math.floor(Math.random()*n);
    
    let selectedName = names[i];
    
    ...}
    
We define a variable called names (using the let expression) which is an array containing a list of names (arrays are represented with brackets [] that wrap the list of items inside it, they are like containers for the items). 

We define a second variable called selected which is an empty array (the reason being that every randomly selected name will have to remain on screen so they need to be placed inside another array until all the names have been selected).

Variable n tells us the number of names contained in the arrary (using the length property), 23 in our case. 

The system is going to select a random number when we use the function Math.random. The number can go from 0 to 1 (but 1 is not included, so it could go up to 0.999 and further). The random number will be multiplied by 23. Since the result could turn a decimal number we need to use the Math.floor function to round it to the lowest resulting number. Imagine the system returns us 0.99 random. When multiplied by 23 we get 22.77 so it will be rounded to 22. The selectedName will be Vanessa (take into account the first item in an array is represented by number 0, not 1).
