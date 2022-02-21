const NUMBER_OF_CHOICES = 4;

const imageDiv = document.querySelector("#g_image");
const choicesDiv = document.querySelector("#g_choices");

const menuDiv = document.querySelector("#menu");
const gameDiv = document.querySelector("#game");

menuDiv.style.top = "0px";
gameDiv.style.display = "none";

document.getElementById("b1").onclick=function(){
    closeMenu();
    setTimeout(newGame, 700);
}

function closeMenu(){
    menuDiv.style.top = "-600px";
    gameDiv.style.display = "flex";
}
function openMenu(){
    menuDiv.style.top = "0px";
    gameDiv.style.display = "none";
}
function pickIndex(except){
    let i;
    do {
        i = Math.floor(Math.random() * hiragana.length);
        // pick a new number as long as we have an overlap
    }while(except.includes(i));
    return i;
}
function newGame(){
    choicesDiv.innerHTML = "";

    // Pick the correct one
    correctIndex = Math.floor(Math.random()*hiragana.length); 

    //Displayed options starting from the correct one
    let choices = [correctIndex]; 

    //Add the rest
    for(let i=0; i<NUMBER_OF_CHOICES-1;i++){
        choices.push(pickIndex(choices));
    }

    //Make sure the correct index is not first
    choices = shuffle(choices);

    let choiceString = "";
    for (const choice of choices) {
      choiceString += `<button class="g_buttons" onclick="answer(${choice})">${romaji[choice]}</button>`;
    }
  
    imageDiv.innerText = hiragana[correctIndex];
    choicesDiv.innerHTML = choiceString;
}
function answer(index){
    if (index == correctIndex) {
        console.log('Won');
        newGame();
    }else{
        console.log('Lost');
    }
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }
