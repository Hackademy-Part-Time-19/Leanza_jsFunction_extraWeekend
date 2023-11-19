// creazione funzione per aggiungere "_check" ad ogni elemento di un array


// utilizzando la funzione .push per creare una seconda lista modificata in return
function insertCheck1(array) {
    let arrayModificato = [];
    for (let i = 0; i < array.length; i++) {
        arrayModificato.push(array[i] + "_check");
    }
    return arrayModificato;
}

let listaNomi = ["Luca", "Giusi", "Lorenzo", "Matteo", "Luigi"];
let ListaNomiModificato = insertCheck1(listaNomi);
console.log(ListaNomiModificato);

// utilizzando la semplice concatenazione, modificando la lista esistente
function insertCheck2(array) {
    for(let i = 0; i < array.length;i++){
        array[i] = array[i] + "_check";
    }
    return array;

}

let listaNomi2 = ["Luca", "Giusi", "Lorenzo", "Matteo", "Luigi"];
let nuovaLista = insertCheck2(listaNomi2)
console.log(nuovaLista)