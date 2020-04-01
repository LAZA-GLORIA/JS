let poids = prompt("Quel est votre poids? (en kilos) : ");
let taille = prompt("Quel est votre taille? (en cm) : ");


function calculerIMC(poids, taille){
    //Calcul de la taille en mètres
    let tailleEnMetres      = taille / 100;

    let tailleRacineCarree  = Math.pow(tailleEnMetres, 2);

    let resultat            = poids / tailleRacineCarree;
    
    return resultat;
}

alert(calculerIMC(poids, taille));
