//variables and constants  
let direction = {x:0 , y:0}
let foodsound =new Audio('food.mp3');
let gameOversound =new Audio('gameover.mp3');
let movesound =new Audio('move .mp3');
let musicsound =new Audio('music.mp3');
let speed=3;
let paintlasttime=0;



//functions 
function main( ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if ((ctime-paintlasttime)/1000 <1/speed);{
        return 0;
    }
     
     
}













//MAIN LOGIC

window.requestAnimationFrame(main);





