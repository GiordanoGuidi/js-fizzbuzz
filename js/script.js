console.log('JS OK');

// RECUPERO L'ELEMENTO 
const element = document.querySelector('.container')
console.log(element)
// CREO LISTA
let listItems = '<ul class="list-unstyled d-flex flex-wrap gap-2">';
console.log(listItems)

// Creo il ciclo di conteggio
for( let i= 0 ; i < 100 ; i++){
    if((i+1) % 3 === 0 && (i+1) % 5 === 0){
        listItems +=`<li class="bg-danger">Fizzbuzz</li>`;
    }
    else if((i+1) % 3 === 0){
        listItems += `<li class="bg-warning">Fizz</li>`;
        
    }
    else if((i+1) % 5 === 0 ){
        listItems += `<li class="bg-success">Buzz</li>`;
    }
    else{
        listItems += `<li class="bg-primary">${i + 1}</li>`;
    }
};

listItems += '</ul>';
element.innerHTML = listItems;