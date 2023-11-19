
// Dato uno studente in input la funzione verifica la presenza dello studente in un lista e restituisce un output


function verificaPresenza(listaNomi, studente) {
    let studentePresente = false;
    for (let i = 0; i < listaNomi.length; i++) {
        if (listaNomi[i] === studente) {
            studentePresente = true;
            break;
        }
    }
    return studentePresente;
}


alert("Buongiorno!")
let listaNomi = ["Luca", "Giusi", "Lorenzo", "Matteo", "Luigi"];
let studente = prompt("Quale studente vuoi verificare?")
let studentePresente = verificaPresenza(listaNomi, studente);



if (studentePresente) {
    alert(studente + " è presente in classe");
} else {
    alert(studente + " è assente in classe")
}
