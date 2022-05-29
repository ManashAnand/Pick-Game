rollDice = document.getElementById("roll-dice");
dice = document.getElementById("dice");
current1 = document.getElementById("current-1");
current2 = document.getElementById("current-2");
hold = document.getElementById("hold");
scoreOne = document.getElementById("score-1")
scoreTwo = document.getElementById("score-2")
ChangePlayer = document.getElementById("ChangePlayer");
newGame = document.getElementById("newGame");


var currentScore1=0;
var currentScore2=0;
var score = [0,0];
var activePlayer = 1;
var value = [0,0];


rollDice.addEventListener('click',random);
hold.addEventListener('click',HoldTheValue);
ChangePlayer.addEventListener('click',PlayerChanged);
newGame.addEventListener('click',newgame);


function random()
{
    dice.innerText = Math.floor((Math.random()*6)+1);
  if(activePlayer == 1)
  {
  
    if(dice.innerText == "1") 
    { 
    
        currentScore1 = 0;
    current1.innerText = currentScore1;
    PlayerChanged();
    
    }
    else
    {
    currentScore1 += parseInt(dice.innerText);
    
    current1.innerText = currentScore1;
    score[0]=currentScore1;     
    console.log(score[0])
    console.log("THIS IS VALUE "+value[0]);
   
    if(value[0]>=100)
    {
        current1.innerText = "WINNER";
    }
      }
    }
else
    {
    if(dice.innerText == "1") 
         { 
    currentScore2 = 0;
    current2.innerText = currentScore2;
    PlayerChanged();
            }
        
    else
    {
    currentScore2 += parseInt(dice.innerText);
    
    current2.innerText = currentScore2;
    score[1] = currentScore2;
    if(value[1]>=100)
     {
     current2.innerText = "WINNER";
      }
        }    
      
    }
}

function HoldTheValue()
{   
   if(activePlayer == 1)
   {
    value[0] += score[0]; 
    
    scoreOne.innerText = value[0];   
    current1.innerText = "0";
    currentScore1 = 0;
   
    
   }
   else{
    value[1]+=score[1];   
    
    scoreTwo.innerText = value[1];   
    
    current2.innerText = "0";
    currentScore2 = 0;
    }
}

function PlayerChanged()
{
    if(activePlayer == 1)
    {
        activePlayer = 2;
        scoreOne.style.backgroundColor = "#ffcb74";
        scoreTwo.style.backgroundColor = "#2f2f2f";
        scoreTwo.style.color = "#ffcb74";
        score[0]=0;
    }
    else
    {
        activePlayer = 1;
        scoreOne.style.backgroundColor = "#2f2f2f";
        scoreTwo.style.backgroundColor = "#ffcb74";
        scoreOne.style.color = "#ffcb74";
         score[1]=0;
    }
}

function newgame()
{
scoreOne.innerText = 0;
scoreTwo.innerText = 0;
current1.innerText = 0;
current2.innerText = 0;
PlayerChanged();
}