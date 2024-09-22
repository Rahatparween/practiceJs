let a =12;
let b= 12;
console.log ("a+b",a+b);

//unary oprator (++a_pre incriment) (a++_post incriment) :a=a+1
a++;
console.log("a",a)

//asignment oprator(= += -= *= %= **=)
a *= 4;
console.log(a);

//comparison oprator (==,===,!=,!==)
console.log(a != b);    //true

console.log(a < b); //false

//logical oprator (&& , ||, !)
let cond1= a>b; //true
let cond2 = a===b;     //false

console.log("cond1 && cond2",cond1 && cond2); //false

console.log(cond1 || cond2 ); //true:if only one cond is true its give u true cond

console.log (!(a===b));

//CONDITIONAL STATEMENT (if statement)
let age =24;
if(age>18){
    console.log("you can vote");
}

 let mode = "light";
 let color;
if(mode==="dark"){
    color = "black"
}
 console.log(color);

 //if else statement

if(mode === "dark"){
    color ="black"
}else{
    color ="white"
}
console.log (color);

let number =29;
if(number%2===0){
    console.log ("number is even");
}else{
    console.log( "number is odd");
}

//else if STATEMENt
let ticketPrice ;
if (age<=12){
    ticketPrice=5
}else if(age <=18){
    ticketPrice =10
}else if (age<=60){
    ticketPrice=20
}else {
    ticketPrice =15
}
console.log(ticketPrice);


let price = 11
let discount;
if (price >= 100){
discount = 20
}else if(price >= 50){
    discount = 10
}else{
    discount = 0
}
console.log (discount);

let time =7;
let great;
 
if(time <= 12 ){
great="good morning"
}else if( time <= 19){
    great="good afternoon"
}else {great = "good evening"}

console.log(great);

let secretNumber = 7;
let guessNumber =7;

if(guessNumber === secretNumber){
    console.log ("congratulation,you win");
}else if ( guessNumber > secretNumber){
    console.log("try lower numbr");
}else{
    console.log("try higher num");
}

//conditional statement
let Age =23;
Age >=18? console.log("adult"):("not adult"); //compact if else


let num=90;
if( num%5 === 0){
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is not a multiple of 5");
}


let score = 79;
let grade;
if(score >=90 &&  score <=100){
  grade = "A";
} else if(score >= 70 && score <=89){
    grade ="B";
}else if (score>=60 && score <=69){
    grade ="C";
}else if (score >=50 && score <=59){
    grade = "d";
}else {
    grade ="F";
}
console.log(grade);






















