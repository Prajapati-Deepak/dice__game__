'use strict';
let playing =true;
let currentScore=0;
let activeplayer =0;
let score =[0,0]; 
const newGame=document.getElementsByClassName('.new');
const hold=document.getElementsByClassName('.hold');
const roll=document.getElementsByClassName('.roll');
const diceEl =document.querySelector('.dice');
const player1=document.querySelector('.section1');
const player2=document.querySelector('.section2');
//  player1.classList.add('active');
    document.querySelector(`.player--${activeplayer}`).classList.add('active');

diceEl.classList.add("hidden");
function switchplayer(){
    currentScore=0;
    document.querySelector(`#currentscore--${activeplayer}`).textContent=currentScore;    
    document.querySelector(`.player--${activeplayer}`).classList.remove('active');
    activeplayer=(activeplayer===1)?0:1; 
    document.querySelector(`.player--${activeplayer}`).classList.add('active');
}
document.querySelector('.roll').addEventListener('click' ,function()
{ if(playing)
    {


      let diceNumber=Math.trunc(Math.random()*6)+1;
      diceEl.src=`images/dice-${diceNumber}.png`;
      diceEl.classList.remove("hidden");
    if(diceNumber!==1)
    {
        currentScore+=diceNumber;
        document.querySelector(`#currentscore--${activeplayer}`).textContent=currentScore;    
    }
    else
    {
       switchplayer(); 
    //    document.querySelector(`.player--${activeplayer}`).classList.add('active');
    }
    }
});
document.querySelector('.hold').addEventListener('click' ,function()
{
    if(playing)
    {
    score[`${activeplayer}`]+=Number(document.querySelector(`#currentscore--${activeplayer}`).textContent);    
    console.log(score[`${activeplayer}`]);
    document.querySelector(`#score--${activeplayer}`).textContent=score[`${activeplayer}`];
    if(score[`${activeplayer}`]>=40)
    {
        playing=false;
        document.querySelector(`.player--${activeplayer}`).classList.add('winner');
        diceEl.classList.add("hidden");   
        currentScore=0;
        document.querySelector(`#currentscore--${activeplayer}`).textContent=currentScore;  
    }
    else{
        switchplayer();
    }    
    } 
});
document.querySelector('.new').addEventListener('click' ,function(){
    document.querySelector(`.player--${activeplayer}`).classList.remove('active');
    document.querySelector(`.player--${activeplayer}`).classList.remove('winner');
    playing =true;
    currentScore=0;
    activeplayer =0;
    score =[0,0] 
    document.querySelector('#score--0').textContent=0;
    document.querySelector('#score--1').textContent=0;
    document.querySelector(`.player--${activeplayer}`).classList.add('active');
    diceEl.classList.add("hidden");
});