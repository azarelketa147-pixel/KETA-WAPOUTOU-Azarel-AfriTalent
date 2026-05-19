function startCounter(id, max = 2500, speed = 100) {
let count = 0
let compteur = document.getElementById(id);
let interval = setInterval (() => {
    count++;
    compteur.textContent = count;
    if (count >= max) {
        clearInterval(interval);
       }
    }, speed); 
}
// Lancement des compteurs 
window.onload = function () {

    startCounter("count1", 500);
    startCounter("count2", 500);
    startCounter("count3", 500);
    startCounter("count4", 500);
    startCounter("count5", 500);
    startCounter("count6", 500);
    startCounter("count7", +2500);
    startCounter("count8", +800);
    startCounter("count9", 500);
    startCounter("count10", +1200);
};

/*=====  Validation JavaScript côté client =====*/
const bouton = document.getElementById("sendBtn");

bouton.addEventListener("click", function(e){

    e.preventDefault();

    // Champs

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Zones d'erreur

    const nomError = document.getElementById("nomError");
    const prenomError = document.getElementById("prenomError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Message succès

    const successMessage = document.getElementById("successMessage");

    // Réinitialiser erreurs

    nomError.textContent = "";
    prenomError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    successMessage.style.display = "none";

    let valide = true;

    // Validation nom

    if(nom === ""){
        nomError.textContent = "Veuillez entrer votre nom";
        valide = false;
    }

    // Validation prénom

    if(prenom === ""){
        prenomError.textContent = "Veuillez entrer votre prénom";
        valide = false;
    }

    // Validation email avec regex

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        emailError.textContent = "Veuillez entrer votre email";
        valide = false;
    }

    else if(!regexEmail.test(email)){
        emailError.textContent = "Adresse email invalide";
        valide = false;
    }

    // Validation message

    if(message === ""){
        messageError.textContent = "Veuillez écrire un message";
        valide = false;
    }

    else if(message.length < 20){
        messageError.textContent =
        "Le message doit contenir au moins 20 caractères";
        valide = false;
    }

    // Succès

    if(valide){

        successMessage.style.display = "block";

        // Réinitialiser les champs

        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    }

});