var elementos = document.querySelectorAll('.player-options div > img');
var playerOption = "";
var inimigoOption = "";


resetGame();

function validarVitoria(){
    
    let vencedor = document.querySelector('.vencedor');

    var player1 = document.querySelector('.player1').value;
    var player2 = document.querySelector('.player2').value;


    if(playerOption == "paper"){
        if(inimigoOption == "paper"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = "EMPATE";
        }else if(inimigoOption == "scisor"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = `O vencedor foi : ${player2}`;
        }else if(inimigoOption == "rock"){
            vencedor.style.display = 'block';
            vencedor.innerHTML =  `O vencedor foi : ${player1}`;
        }
    }

    if(playerOption == "scisor"){
        if(inimigoOption == "paper"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = `O vencedor foi : ${player1}`;
        }else if(inimigoOption == "scisor"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = "EMPATE";
        }else if(inimigoOption == "rock"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = `O vencedor foi : ${player2}`;
        }
    }

    if(playerOption == "rock"){
        if(inimigoOption == "paper"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = `O vencedor foi : ${player2}`;
        }else if(inimigoOption == "scisor"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = `O vencedor foi : ${player1}`;
        }else if(inimigoOption == "rock"){
            vencedor.style.display = 'block';
            vencedor.innerHTML = "EMPATE";
        }
    }

}

function resetGame(){
    document.querySelector('.btn').addEventListener('click', ()=>{
    
        let vencedor = document.querySelector('.vencedor');
    
        vencedor.style.display = 'none';
        
        document.querySelector('.player1').value = "";
        document.querySelector('.player2').value = "";

        resetOpacityPlayer();
        resetInimigo();
    
    });
}


function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;

    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();

    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOption = enemyOptions[i].childNodes[0].getAttribute('option');
        }
    }

    validarVitoria();
}

function resetOpacityPlayer(){
    for( var i = 0 ; i < elementos.length; i++){
       elementos[i].style.opacity = 0.3;
    }
}


for( var i = 0 ; i < elementos.length; i++){
    elementos[i].addEventListener('click', (value)=>{
        resetOpacityPlayer();    
        value.target.style.opacity = 1;
        playerOption = value.target.getAttribute('option');

        inimigoJogar();
    });
}