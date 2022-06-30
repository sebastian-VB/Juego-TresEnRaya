
console.log('Juego corriendo');

//declaracion de variabls
let showX_O = true;
let letter_x = 'x';
let letter_o = 'o';
let btnHTML = null;
let count = -1;

let messageX = 'El ganador es: Jugador1';
let messageO = 'El ganador es: Jugador2';

let arrayTable = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];


//componentes html
let compLine1 = document.getElementById('line-w1');
let compLine2 = document.getElementById('line-w2');
let compLine3 = document.getElementById('line-w3');
let compLine4 = document.getElementById('line-w4');
let compLine5 = document.getElementById('line-w5');
let compLine6 = document.getElementById('line-w6');
let compLine7 = document.getElementById('line-w7');
let compLine8 = document.getElementById('line-w8');

//funcion principal
function show(id){

    btnHTML = document.getElementById(id);

    //cabiar de "x" a "o"
    if(!showX_O){
        btnHTML.innerHTML = letter_o;
        arrayTable[id] = letter_o;
        showX_O = true;
        count++;
    }
    else if(showX_O){
        btnHTML.innerHTML = letter_x;
        arrayTable[id] = letter_x;
        showX_O = false;
        count++
    }
    
    console.log(arrayTable, count);

    //0-1-2
    browseX_O(arrayTable[0], arrayTable[1], arrayTable[2], messageX, messageO, 1);

    //3-4-5
    browseX_O(arrayTable[3], arrayTable[4], arrayTable[5], messageX, messageO, 2);

    //6-7-8
    browseX_O(arrayTable[6], arrayTable[7], arrayTable[8], messageX, messageO, 3);

    //0-3-6
    browseX_O(arrayTable[0], arrayTable[3], arrayTable[6], messageX, messageO, 4);

    //1-4-7
    browseX_O(arrayTable[1], arrayTable[4], arrayTable[7], messageX, messageO, 5);

    //2-5-8
    browseX_O(arrayTable[2], arrayTable[5], arrayTable[8], messageX, messageO, 6);

    //0-4-8
    browseX_O(arrayTable[0], arrayTable[4], arrayTable[8], messageX, messageO, 7);
    
    //2-4-6
    browseX_O(arrayTable[2], arrayTable[4], arrayTable[6], messageX, messageO, 8);


}

//otras funciones
function browseX_O(figure1, figure2, figure3, texto_X, texto_O, shapeW){

    if(count <= 8){
        if(figure1 == 'x' && figure2 == 'x' && figure3 == 'x'){
            console.log(texto_X);
            gameOver(texto_X)
            showLinesWinner(shapeW);
            disableButons();
        }
        else if(figure1 == 'o' && figure2 == 'o' && figure3 == 'o'){
            console.log(texto_O);
            gameOver(texto_O)
            showLinesWinner(shapeW);
            disableButons();
        }
        console.log(count);
    }
    else{
        disableButons();
    }


}

function gameOver(texto){

    document.getElementById('winner').innerHTML = texto;

    setInterval(()=>{
        document.getElementById('gameOver').classList.add('gameOverPanel');
    }, 1500);
}

function showLinesWinner(line){

        switch(line){
            
            case 1:
                console.log('entra en 1');
                compLine1.classList.add('w1-active');

                compLine2.classList.remove('w2-active');
                compLine3.classList.remove('w3-active');
                compLine4.classList.remove('w4-active');
                compLine5.classList.remove('w5-active');
                compLine6.classList.remove('w6-active');
                compLine7.classList.remove('w7-active');
                compLine8.classList.remove('w8-active');
            break;

            case 2:
                console.log('entra en 2');
                compLine2.classList.add('w2-active');

                compLine1.classList.remove('w1-active');
                compLine3.classList.remove('w3-active');
                compLine4.classList.remove('w4-active');
                compLine5.classList.remove('w5-active');
                compLine6.classList.remove('w6-active');
                compLine7.classList.remove('w7-active');
                compLine8.classList.remove('w8-active');
            break;

            case 3:
                console.log('entra en 3');
                compLine3.classList.add('w3-active');

                compLine1.classList.remove('w1-active');
                compLine2.classList.remove('w2-active');
                compLine4.classList.remove('w4-active');
                compLine5.classList.remove('w5-active');
                compLine6.classList.remove('w6-active');
                compLine7.classList.remove('w7-active');
                compLine8.classList.remove('w8-active');
            break;

            case 4:
                console.log('entra en 4');
                compLine4.classList.add('w4-active');

                compLine1.classList.remove('w1-active');
                compLine2.classList.remove('w2-active');
                compLine3.classList.remove('w3-active');
                compLine5.classList.remove('w5-active');
                compLine6.classList.remove('w6-active');
                compLine7.classList.remove('w7-active');
                compLine8.classList.remove('w8-active');
            break;

            case 5:
                console.log('entra en 5');
                compLine5.classList.add('w5-active');

                compLine1.classList.remove('w1-active');
                compLine2.classList.remove('w2-active');
                compLine3.classList.remove('w3-active');
                compLine4.classList.remove('w4-active');
                compLine6.classList.remove('w6-active');
                compLine7.classList.remove('w7-active');
                compLine8.classList.remove('w8-active');
            break;

            case 6:
                console.log('entra en 6');
                compLine6.classList.add('w6-active');

                compLine1.classList.remove('w1-active');
                compLine2.classList.remove('w2-active');
                compLine3.classList.remove('w3-active');
                compLine4.classList.remove('w4-active');
                compLine5.classList.remove('w5-active');
                compLine7.classList.remove('w7-active');
                compLine8.classList.remove('w8-active');
            break;

            case 7:
                console.log('entra en 7');
                compLine7.classList.add('w7-active');

                compLine1.classList.remove('w1-active');
                compLine2.classList.remove('w2-active');
                compLine3.classList.remove('w3-active');
                compLine4.classList.remove('w4-active');
                compLine5.classList.remove('w5-active');
                compLine6.classList.remove('w6-active');
                compLine8.classList.remove('w8-active');
            break;

            case 8:
                console.log('entra en 8');
                compLine8.classList.add('w8-active');

                compLine1.classList.remove('w1-active');
                compLine2.classList.remove('w2-active');
                compLine3.classList.remove('w3-active');
                compLine4.classList.remove('w4-active');
                compLine5.classList.remove('w5-active');
                compLine6.classList.remove('w6-active');
                compLine7.classList.remove('w7-active');
            break;
        }
}

function disableButons(){

    for(let i = 0; i< 9; i++){
        let buttonTR = document.getElementById(i);
        buttonTR.disabled = true;
    }

}

function resetButons(){

    for(let i = 0; i< 9; i++){
        let buttonTR = document.getElementById(i);
        buttonTR.innerHTML = '';
        buttonTR.disabled = false;
    }

}

document.getElementById('btn-reiniciar').addEventListener('click', ()=>{
    console.log('Funciona');
    resetGame();    
})

document.getElementById('btn-gameOver').addEventListener('click', ()=>{
    console.log('Funciona');
    // document.getElementById('gameOver').classList.remove('gameOverPanel');    
    // resetGame();
    location.reload();
})

function resetGame(){
    count = -1;
    arrayTable = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    showX_O = true;
    resetButons();
    resetLines();
}

function resetLines(){
    compLine1.classList.remove('w1-active');
    compLine2.classList.remove('w2-active');
    compLine3.classList.remove('w3-active');
    compLine4.classList.remove('w4-active');
    compLine5.classList.remove('w5-active');
    compLine6.classList.remove('w6-active');
    compLine7.classList.remove('w7-active');
    compLine8.classList.remove('w8-active');
}