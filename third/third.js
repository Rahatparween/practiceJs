                              //function//
function countsVowel (str){
    let count=0;
    for(const char of str){
    if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u"){
        count++;
    }
    }
return count;
}
                              //arrow function//
const countvow =(str) =>{
    let count=0;
    for(const char of str){
    if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u"){
        count++;
    }
    }
return count;
}
                            //for each loop in arry

  let arry =[1,2,3,4,5,6,7,8] ;
  arry.forEach((val,idx,arr) =>{
console.log(val,idx,arr);
  })                        



let num =[3,4,5,6,7,8,9]
num.forEach((val)=>{
console.log(val*val);
})

//flter-method

let marks =[70,35,68,90,95,91]

let newmarks =marks.filter((val)=>{
 return val >=90;
})

console.log(newmarks);



function calculateArea(width,height =67){
    return width*height
}

console.log(calculateArea(23));


function download (){
    const filename ="subs.pdf"

}

download();

let countevennumber = (arr) =>
    arr.filter(num => num %2 ===0).length;
console.log (countevennumber([1,2,3,4,5,6,7,9,8]))


function countVowels(str){
let count =0;   
for (const char of str){
    console.log (char);
if(char==="a"|| "e"||"i"||"o"||"u"){
 count++;  
}
}
return count;
}
countVowels("rahat")


function calculateCartPrice (val1,val2,...num1){
return num1
}
console.log(calculateCartPrice(2,78,8,9));



function calculateDiscount (price,discount) {
    return price -(price* discount / 100);
}
console.log (calculateDiscount(100,20) );


function converter(celsius){
    return (celsius* 9/5) +32
}
console.log (converter(12));


function calculateArea (radius) {
    return Math.PI*radius*radius
}
console.log (calculateArea(60));