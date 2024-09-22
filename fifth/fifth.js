let containerEl = document.querySelector(".container");
let arry = ["youtuber","doctor","carpenter","engineer","labor"];

let arryindex =0;
let characterindex =0;
 updateText();
function updateText () {
    characterindex++
    containerEl.innerHTML =`<h1> i am a ${arry[arryindex].slice(0,characterindex)} </h1>`;
    if(characterindex=== arry[arryindex].length){
        arryindex ++  ;
        characterindex =0;
    }

if( arryindex === arry.length){
    arryindex =0;
}
setTimeout( updateText,400);

}
