for( let count =1;count<=5;count++){
    console.log("rahat");
}
let num;
for (num=0;num<=100;num++){
 if(num%2===0){  
    console.log("even num",num);
}else if(num%2 !==0){
    console.log("odd num",num)
}
};

/*let gameNumber=25;
let guessNumber = prompt("guess the game number");
 while(guessNumber!= gameNumber){
  guessNumber = prompt("guess again");
 }
 console.log("congo you win");*/

 let Number;
for(Number=1;Number<=45;Number++){
    if(Number%3 ==0){
        console.log("fizz");
    }else if( Number%5 ==0){
        console.log("buzz");
    }else if(Number%3 ==0 && Number%5 ==0){
        console.log("fizzbuzz");
    }
}
/*let userName = prompt("enter your full name")
console.log(".,@"+ userName+ userName.length );*/

let elements =["element1","element2","element3"];
for(element of elements){
console.log(element);
}

 /*let Nums =[1,13,22,123,49]
let sum=0;
for(Num of Nums){
    sum= sum+Num
}
console.log(sum)*/


/*let arrys = [85,97,44,37,76,60]
let Sum =0;
for(arry of arrys){
    Sum += arry;
}
let avg = Sum/arrys.length
console.log(avg); */

let items = [250,645,300,900,50]
for(let i =0; i<items.length; i++ ){
  let offer =items[i] /10;
items[i] = items[i] -offer;
}
console.log(items);

let allstudentMarks = [80,77,88,95,68]
let newmarks;
for(let i=0;i<items.length; i++){
    let newmarks=allstudentMarks[i]/items.length
    console.log (newmarks);
if(newmarks <60){
    console.log("grade F")
}else if(newmarks < 70){
    console.log("grade D")
}else if(newmarks < 80){
    console.log("grade C")
}else if(newmarks<90){
    console.log("grade B")
}else if (newmarks < 100){
    console.log("grade A")
}
}
let i;
for(i=10;i<100;i+=10){
console.log(i);
}

let cards = [7,3,9]
for(i=0;i<cards.length;i++){
    console.log(cards [i])
}

let string ="rahat"
for(let val of string){
    console.log(val);
}

let arr_1 = [3,5,22,5,7,2,45,75,89,21,2]
let arr_2 =[9,2,42,55,71,22,4,5,90,25,26]
let sum =0;
for(item of arr_1){
    sum = sum + item
console.log(sum);
}
for(item of arr_2){
sum =sum+item;
console.log(sum);
}

console.log (arr_1.concat(arr_2));


let n1 =22;
for(i =1;i<=n1;i++){
    if (i%2 ==0){
        console.log(i);
        
    }

    }

 let msg =["hey,hows it going",
    "im great,thankyou! how about you",
    "all good.been working on my portfolio lately"
 ]   
console.log (msg);
for(let i=0;i<5;i++){
    console.log(msg[i])
}

let Cards =[7,3,9]
for(let i=0;i<cards.length;i++){
   console.log(Cards[i]);
}

let companies =["bloomberg","microsoft","uber","google","ibm","netflix"]
console.log (companies.shift());
console.log(companies);
companies.splice(2,1,"ola");
console.log (companies.push("amazon"));















