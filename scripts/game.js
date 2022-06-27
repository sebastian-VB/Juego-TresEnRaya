
console.log('Juego corriendo');

//declaracion de variabls
let showX_O = true;
let letter_x = 'x';
let letter_o = 'o';
let btnHTML = null;

let arrayTable = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];


//componentes html


//funcion principal
function show(id){

    btnHTML = document.getElementById(id);

    //cabiar de "x" a "o"
    if(!showX_O){
        btnHTML.innerHTML = letter_o;
        arrayTable[id] = letter_o;
        showX_O = true;
    }
    else if(showX_O){
        btnHTML.innerHTML = letter_x;
        arrayTable[id] = letter_x;
        showX_O = false;
    }
    
    console.log(arrayTable);
    browseX_O();
}

//otras funciones
function browseX_O(){

    //0-1-2
    if(arrayTable[0] == 'x' && arrayTable[1] == 'x' && arrayTable[2] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[0] == 'o' && arrayTable[1] == 'o' && arrayTable[2] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //3-4-5
    if(arrayTable[3] == 'x' && arrayTable[4] == 'x' && arrayTable[5] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[3] == 'o' && arrayTable[4] == 'o' && arrayTable[5] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //6-7-8
    if(arrayTable[6] == 'x' && arrayTable[7] == 'x' && arrayTable[8] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[6] == 'o' && arrayTable[7] == 'o' && arrayTable[8] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //0-3-6
    if(arrayTable[0] == 'x' && arrayTable[3] == 'x' && arrayTable[6] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[0] == 'o' && arrayTable[3] == 'o' && arrayTable[6] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //1-4-7
    if(arrayTable[1] == 'x' && arrayTable[4] == 'x' && arrayTable[7] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[1] == 'o' && arrayTable[4] == 'o' && arrayTable[7] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //2-5-8
    if(arrayTable[2] == 'x' && arrayTable[5] == 'x' && arrayTable[8] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[2] == 'o' && arrayTable[5] == 'o' && arrayTable[8] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //0-4-8
    if(arrayTable[0] == 'x' && arrayTable[4] == 'x' && arrayTable[8] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[0] == 'o' && arrayTable[4] == 'o' && arrayTable[8] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }

    //2-4-6
    if(arrayTable[2] == 'x' && arrayTable[4] == 'x' && arrayTable[6] == 'x'){
        console.log('Ganador jugador 1');
        disableButons();
    }
    else if(arrayTable[2] == 'o' && arrayTable[4] == 'o' && arrayTable[6] == 'o'){
        console.log('Ganador jugador 2');
        disableButons();
    }
}

function disableButons(){

    for(let i = 0; i< 9; i++){
        let buttonTR = document.getElementById(i);
        buttonTR.disabled = true;
    }

}