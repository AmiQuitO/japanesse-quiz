x = 0;
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
    x = Math.floor(Math.random()*108); // the number you have to guess
    x2 = Math.floor(Math.random()*4); // which button is the right one
    x1 = []; // the choices
    console.log(x, x2);
    for(i=0;i<4;i++){
        a = Math.floor(Math.random()*108);
        if(!(i == 0)){
            do{
                cont = false;
                for(j=0;j<4;j++){
                    if(x1[j] == a || x1[j] == x){  
                        a = Math.floor(Math.random()*108);
                        cont = true;
                    }
                }
            }while(cont);
        }
        x1[i] = a;
    }
    x1[x2] = x; // overwrite the right answer
    console.log(x1,x, x2);
    document.getElementById("g_image").innerHTML = hira1[x] + (x2+1);
    for(i=0;i<4;i++){
        document.getElementById("g_choices").innerHTML += "<div class='g_buttons' onclick='answer("+ x1[i] +")'>"+ hira2[x1[i]] +"</div>";
    }
}
function answer(a){
    if(a == x){
        console.log("Won");
        newgame();
    }else{
        console.log("Lost");
    }
}