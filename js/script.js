// RECUPERO L'ELEMENTO 
const listElement = document.getElementById('list');
console.log(listElement)
let items = '';

// Creo il ciclo di conteggio
for( let i= 0 ; i < 100 ; i++){
    let content = (i +1);

    if((i+1) % 3 === 0 && (i+1) % 5 === 0){
        content ='fizzbuzz';
    }
    else if((i+1) % 3 === 0){
        content = 'fizz';
    }
    else if((i+1) % 5 === 0 ){
        content = 'buzz';
    }
    // CREO GLI ITEMS CON CONTENUTO DEL CICLO FOR
    items +=`<li>${content}</li>`;
};

listElement.innerHTML = items;




