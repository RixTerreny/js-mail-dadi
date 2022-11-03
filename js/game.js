let btn = document.getElementById("btn");
let dado1 
let dado2

btn.addEventListener("click", function(){
    dado1 = Math.floor(Math.random() *6+1);
    console.log(dado1)

    dado2 = Math.floor(Math.random() *6+1);
    console.log(dado2)

    if(dado1>dado2){
        alert("Hai vinto");
    }
    else if(dado1<dado2){
        alert("Hai perso");
    }
    else{
        alert("Pareggio");
    }
})