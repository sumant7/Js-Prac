// the function clicked has been called in the button
function clicked(){
    console.log('The button was clicked');
}
//when window is loaded this will happen
window.onload = function(){
    console.log('Loding Done');
}


//events in javascript   //contextmenu mousemove submit focus transitionend
//mordern browsers create a varible automatically with same name as ID which points to the element
// when element with id "firstc" is clicked this event happens
firstc.addEventListener("click", function(){ 
    console.log("click Hua");
});

// when mouse is over the element with id "firstc" this event happens
firstc.addEventListener("mouseover", function(){
    console.log("Mouse on Container");
});

// when mouse comes out of the element with id "firstc" this event happens
firstc.addEventListener("mouseout", function(){
    console.log("Mouse Out");
});


let prev=document.querySelectorAll('.container')[1].innerHTML; // storing the orginal text


// when mouse is released after clicking element with id "firstc" this event happens
firstc.addEventListener("mouseup", function(){
    console.log("Mouse Up");
    document.querySelectorAll('.container')[1].innerHTML=prev; // after click is done restore to original
});

// during clicking the element with id "firstc" this event happens
firstc.addEventListener("mousedown", function(){
    console.log("Mouse Down");
    document.querySelectorAll('.container')[1].innerHTML = "Hue Hue Hue";// during the click change the text
});




//arrow function

function sum(a,b){
    return a+b;
} 
//is same as
let sum= (a,b)=>{
    return a+b;
}
//is same as
let sum2=(a,b)=> a+b; 

//example
let obj={
    // here this==obj
    greeting: "Hello",
    names: ["sumant","god","anime"],
    speak(){//function inside object
        this.names.forEach(element => {
            console.log( this.greeting + "Hue Hue "+ element); // this==speak() here BUT since arrow function this points to obj, if we had used a normal function then this.greeting would have been undefined
        });
    }
}
obj.speak()



// set timeoout and set interval


logkaro= (god)=>{
    console.log("after 2sec" + god);
}
//clr=setTimeout(logkaro, 2000) if logkaro had no parameters
clr=setTimeout(logkaro, 2000, " Hello"); //"logkaro" is executed after 2000ms and logkaro is sent not logkaro()
clearTimeout(clr);// we can use to cancel it

clr=setInterval(logkaro, 2000); //"logkaro" is executed after every 2000ms
clearInterval(clr);// we can use to stop it
