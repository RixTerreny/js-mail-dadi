const ammessi =["riccardotrave43@gmail.com","alessandrorossi@gmail.com","gianfelicespagnagatti@gmail.com"];
const email = document.getElementById("email");
const btn = document.getElementById("btn");
let verified = document.getElementById("ver");
let ok = false;

btn.addEventListener("click", function(){
    for (let i = 0;i<ammessi.length; i++ ){
        if (email.value == ammessi[i]){
            ok = true;
            break;
        }
    }

    if (email.value == 0){
        verified.innerHTML="Inserisci e-mail";
    }
    else{
        verified.innerHTML="Questo account non può accedere";
    }

    if (ok == true){
        verified.innerHTML="Accesso eseguito";
        window.open("game.html");
    }
    ok=false;
})


