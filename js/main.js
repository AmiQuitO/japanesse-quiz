answer = 0;
document.getElementById("menu").style.top = "0px";
document.getElementById("game").style.display = "none";

document.getElementById("b1").onclick=function(){
    closemenu();
    setTimeout(newgame, 700);
}

function closemenu(){
    document.getElementById("menu").style.top = "-600px";
    document.getElementById("game").style.display = "flex";
}
function openmenu(){
    document.getElementById("menu").style.top = "0px";
    document.getElementById("game").style.display = "none";
}
function newgame(){
    document.getElementById("g_choices").innerHTML = "";
    answer = Math.floor(Math.random()*108); // the number you have to guess
    x = Math.floor(Math.random()*4); // which button is the right one
    choices = []; // the choices
    console.log(answer, x);
    for(i=0;i<4;i++){
        a = Math.floor(Math.random()*108);
        if(!(i == 0)){
            do{
                cont = false;
                for(j=0;j<4;j++){
                    if(choices[j] == a || a == answer){  
                        a = Math.floor(Math.random()*108);
                        cont = true;
                    }
                }
            }while(cont);
        }
        choices[i] = a;
    }
    choices[x] = answer; // overwrite the right answer
    console.log(choices,answer, x);
    document.getElementById("g_image").innerHTML = hira1[answer] + (x+1);
    for(i=0;i<4;i++){
        document.getElementById("g_choices").innerHTML += "<div class='g_buttons' onclick='choose("+ choices[i] +")'>"+ hira2[choices[i]] +"</div>";
    }
}
function choose(a){
    if(a == answer){
        console.log("Won");
        newgame();
    }else{
        console.log("Lost");
    }
}

// gotta upgrade this code so its readible, but it works for now
