// DOM Manipulation


// document.URL
// document.title
// document.location
// document.script
// document.links
// document.forms
// document.images
// document.domain
// these return values into console

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass); //a

elemClass[0].style.background= "yellow";// change CSS and [0] means first element of the collection

elemClass[0].classList.add("bg-primary"); // add another class to an element no matter if that class exists or not

elemClass[0].classList.remove("bg-primary");// removes a class no matter if that class exists or not

console.log(elemClass[0].innerHTML); //allows access to the html code as a strings in console and replaces the original

console.log(elemClass[1].innerText); //allows access to the text in console and [1] refers to the 2nd element in the collections of elements having class as container

let tn= document.getElementsByTagName('div'); // tags are HTML tags like button, div,span,h1 etc
console.log(tn);
 
createdElement= document.createElement('p'); // creates an HTML elemnt here "p"

createdElement.innerText="this is a created para"; // specifying the text inside our created para

tn[0].appendChild(createdElement); // appending the para to the nend of tn[0]

createdElement2= document.createElement('b');

createdElement2.innerText="this is a created bold";

tn[0].replaceChild(createdElement2, createdElement); // repaces an element in this case createdElement with createdElement2

// removeChild(element) removes child


//selecting using query
sel= document.querySelector('.container'); //first element with .container
console.log(sel);

sel= document.querySelectorAll('.container'); // returns node list of all elements with .container as a set collection or array
console.log(sel);



