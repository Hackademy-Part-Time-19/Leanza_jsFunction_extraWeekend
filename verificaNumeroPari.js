// Ciao ragazzi, che ne pensate? Si tratta di un programma che chiede all'utente se desidera verificare se un numero è pari o dispari. Se l'utente sceglie 1, può inserire un numero e il programma lo informerà se è pari o dispari. Se sceglie 2, il programma termina.
// Ho utilizzato il ciclo while e lo switch case per l'automatismo e le funzioni per la verifica del numero.
// dato un input numerico il programma verifica se il numero è pari o dispari. Per la creazione del programma ho utilizzato il ciclo while e switch case per l'automatismo e le funzioni per la verifica del numero.

alert("Buongiorno e benvenuto! Qui potrai verificare se è un numero è pari o dispari!")
let operazione
while (operazione != 2) {

    operazione = parseInt(prompt("Premi 1 per verificare un numero o 2 per uscire!"))

    switch (operazione) {
        case 1:
            let numero = parseInt(prompt("Qual è il numero che vuoi verificare?"))
            function verificaNumeroPari(numero) {
                numeroPari = false;
                if (numero % 2 == 0) {
                    numeroPari = true;
                }
                return numeroPari;
            }
            numeroPari = verificaNumeroPari(numero)
            if (numeroPari) {
                alert("Il numero " + numero + " è pari");
            } else {
                alert("Il numero " + numero + " è dispari")
            }
            break;

        case 2:
            alert("Interrompo il programma!")
            break;

        default:
            alert("Valore non valido!")
    }
}