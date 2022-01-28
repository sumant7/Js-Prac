// ways to print and interact with console
console.log("Hello World", 5+2);
console.warn("Hue Hue");
alert("Kya haal chal?"); //gives alert but not mordern
console.error("Messi>Ronaldo");
let name= prompt("What?","Guest"); //gives a fill in the blanks asking whatt?//what user fills gets stored in name otherwise if ok is clicked without filling then it is guest but u can give blank 2nd arguement
let deletePost =confirm("do you want to delete?");  //asks the question 
console.log(deletePost)//if user clicked ok then true is printed

// letiables and data types


//declaration

/* const is same as in c++
let a=6;
let a=8        this is valid and a=8 will be considered


let a=6;
let a=8;      this is NOT valid


let a=6;
console.log(a) will print 6
if(){
    let a=8;  this is valid because scope of let is block level
    console.log(a) will print 8    
}
 */





// numbers
let a=45,b=45.23;
console.log(a);
console.log(a+b); // see output 90.22999999
console.log(b);// 45.23 only

//strings
let s1="Hello",s2='World';
console.log(s1+ " "+s2);
let myname="sumant";
let len= myname.length;
console.log(`length is ${len}`)
console.log("My name is \nSumant\t and i am\b great \\n") // \n is newline \t is tab/space and /b no idea and \\n prints "\n"
// surrond string by ' if you want to use " in string. Example 'Sumant is "awesome'; and vice versa.
// use ` if both ' and " inn string

//objects and object methods
let marks={
    ravi: 34,
    sumant: 100,
    harry: 99.29,
    "hue hue" : 69 // use " " when there is space in the name
}
console.log(marks);
console.log(marks.sumant);// outputs 100
console.log(marks['hue hue']);// outputs 69 //use this and only notation if space in name otherwise any method

//booleans
let t=true;
let f=false;
console.log(f,t);

//undefined and null
let und=undefined;
let u;
console.log(und);
console.log(u); // by defaut if not initialized then the value of the letiable is undefined
let n= null; // DO NOT USE "NULL" ONLY USE "null"
console.log(n);

//const same as c++

//symbols: Not Right Now

/*
2 types of data types
1. Primitive data types: undefined, numbers, null, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

//arrays
let arr= [1, 2, "sung jin woo", 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]); 


//operators

//arethamatic operators + / * -
console.log("The value of a+b is: ",a+b);
console.log(2**9); //** is power

//assingment operators = += -= /=  and c-=2 is c=c-2;
let c=b;
console.log(c);

//comparision opertors == < > <= >=
console.log(a==b); 

//logical operators && || !
// bitwise operators also 


// functions
function avg(a,b){
    return (a+b)/2;
    console.log(5)     //anything after return doesn't execute
}
c1= avg(13,6);
console.log(c1);


//default arguements in functions
function avg(a,b=3){
    return (a+b)/2;
}
//if nothing is passed in 2nd arguemnt like c=avg(4); then c= (4+3)/2 else if c=avg(1,2) then c=(1+2)/2 





//conditional statements if else else if
if(a<50)
{
    console.log("HeHe");
}

//loops
// for loops for(i=0;i<arr.length();i++){} same as c++

// for each loop 
arr.forEach(function fun(element){
    console.log(element);
})

//for of loop
for (element of arr){
    console.log(element);
}


//for objects for in loop
let marks={
    ravi: 34,
    sumant: 100,
    harry: 99.29,
    "hue hue" : 69 // use " " when there is space in the name
}

for(key in marks){
    console.log(`The ${key} and ${marks[key]}`)
}
//${key} prints key revi,sumant,harry and ${marks[key]} the value




// use let instead of var

//while and do while loop same as c++
let j=0; // let is local letiable and let global

//break and continue same as c++

//switch case
cups=4;
switch (cups) {
    case 4: // when cups=4 do below written
        console.log("hue Hue")
        break;
    case 5: // when cups=5 do below written
        console.log("hahahah Hue")
        break;

    default: //if none of the above cases do below written
        break;
}
//if break is not written then that case will be run and every case after that too





//array methods

// arr.length - size of array    arr.pop()- removes last element   arr.push("n") adds n to array end
let newarray= new Array(23); //creates an arrayy of 23 elements
arr.shift(); // removes first element 
console.log(arr);
arr.unshift(1); // ads 1 at beginning
console.log(arr);
console.log(arr.unshift(1)); // this gives length of new array
arr.toString(); //converts array to string
arr.sort(); // sorts array after converting everything to string
console.log(arr);




//string methods

let mystring="hello there";
// mystring.length returns length
console.log(mystring.indexOf("e")); // returns first occurance
console.log(mystring.lastIndexOf("e")); // returns last occurance
console.log(mystring.slice(0,3)); //returns a part of string taking first and last index as parameters, can take NEGATIVE values
console.log(mystring.replace("hello","hi")); //replaces first hello with hi but only for printing, original string remains the same
console.log(mystring.substring(0,3));// same as slice except -ve value
console.log(mystring.substr(0,3));// same as slice except 2nd parameter is length
console.log(mystring.toUpperCase());//as name suggests
console.log(mystring.toLowerCase());//as name suggests
let newstring= mystring.concat(' Hue hue'); //ads hue hue to end but use "+" instead
console.log(newstring);// just a reminder that new strings can be made
console.log(mystring.trim());// removes white spaces from beginning and end
let char2= mystring.charAt(2); // returns character at index 2
let char2= mystring.charCodeAt(2); // returns character code(ASCII) at index 2
console.log(mystring[3])// this exists too





//dates 
// Date(0) outputs the reference, 1st jan 1970
let ndate= new Date(); // takes today's date, Date() is an object
console.log(ndate); // 
console.log(ndate.getTime()); // time in seconds
console.log(ndate.getFullYear()); // year
console.log(ndate.getDay()); // day in number, sunday=0,monday=1
console.log(ndate.getMinutes()); // minutes
console.log(ndate.getDate()); // date
console.log(ndate.getMonth()); // month, jan=0
ndate.setDate(15); //auto corrects numbers>31 and set dates,set hours etc
console.log(ndate); // outputs same except date=15
console.log(Date.now()); //outputs no.of mili seconds since 1st jan 1970
let hue= new Date("2029-09-30")
// we can give Date(year,month,date,hours,minutes,seconds,milliseconds)
//let hue= new Date(2069,6,9,6,9,6,9)
console.log(hue); // outputs Sun Sep 30 2029 05:30:00 GMT+0530 (India Standard Time)
console.clear();

 /* how to display time
 //display time
function displaydate(){
    let ndate= new Date();
    document.getElementById('time').innerHTML=ndate;
}
setInterval(displaydate,1000);
 */



// Local Storage
localStorage.setItem('name','sumant'); //sets local storage with name sumant
localStorage.getItem('name');// gets the name of the storage
localStorage.removeItem('name'); //removes  item
localStorage.clear(); // clears all storage

console.clear();



//math object



let m=Math;
console.log(m);// prints all the functions and values of math 
/*values
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
 */
console.log(Math.E) //prints 2.718...
console.log(Math.PI)//prints 3.141592....


//math functions

Math.round(34.56)// returns 35
Math.round(34.5)// returns 35
Math.round(34.49999)// returns 34

Math.pow(3,2);//returns 3^2

Math.sqrt(35)// returns 5.916079783099616

Math.ceil(5.7)// returns 6

Math.floor(5.7)// returns 5

Math.abs(-6.4)// returns 6.4

Math.sin(Math.PI)// returns nearly 0 value, we input in radians in this function
Math.cos() //similar
Math.tan()

Math.min(4,5,6) // returns 4
Math.max(4,5,6) // returns 6

Math.log2()//log base 2
Math.log10()//log base 10
Math.log()//log base e


//random number generator
Math.random();// generates random no between 0 and 1
//to generate random number between a and b
let num= a + (b-a)*Math.Random()








//JSON
//JSON only accepts double quotes if you give single quotes it will use \
//obj={name: "sumant", length: 1} a simple object obj
obj={name: "sumant", length: 1, a:{"this": "that"}} // "a" ia object inside another object obj
jso = JSON.stringify(obj); //converts the object into string
console.log(jso);
console.log(typeof jso); // will output string
console.log(typeof obj); //will output object

// parsed= JSON.parse(`{"name":"sumant","length":1,"a":{"this":"that"}}`)
parsed= JSON.parse(jso)
console.log(parsed); 








//promises
function hue(){
    a=15;
    return new Promise(function(resolve,reject){
        if(a>10)
        {
            console.log("Fun: reject");
            reject("Sorry");
        }
        else{
            console.log("Fun: Resolved");
            resolve();
        }
    })
}

hue().then(function(){      //.then happens when resolved and .catch() when rejected
    console.log("callback succesfull")
}).catch(function(error){    //this function is reject(); which took sry   here error is string which is sorry
    console.log("OOps "+ error)
})