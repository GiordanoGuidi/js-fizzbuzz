// RECUPERO L'ELEMENTO 
const listElement = document.getElementById('list');
console.log(listElement)


// Creo il ciclo di conteggio
for( let i= 0 ; i < 100 ; i++){
    let content = i
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
