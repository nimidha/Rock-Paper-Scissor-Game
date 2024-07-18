const choice=['Rock','Paper','Scissor'];
const player=document.getElementById("player")
const computer=document.getElementById("computer")
const resultdisplay=document.getElementById("results")
const playerscoredisplay=document.getElementById("playerscoredisplay")
const computerscoredisplay=document.getElementById("computerscoredisplay")
const totalscoredisplay=document.getElementById("totalscoredisplay")
let countp=0;
    let countc=0;
    let totalgame=0;


function playgame(playerchoice){


    const computerchoice= choice[Math.floor(Math.random()*3)];
    let result=""

    if(computerchoice === playerchoice){
        result="Its a TIE!"

    }
    else{
        switch(playerchoice){
            case 'Rock':
                result=(computerchoice==="Scissor")?"You Win":"You Lose";
                break;
            case 'Paper':
                result=(computerchoice==="Rock")?"You Win":"You Lose";
                break;
            case 'Scissor':
                result=(computerchoice==="Paper")?"You Win":"You Lose";
                break;
        }
    }
    player.textContent=`Player : ${playerchoice}`;
    computer.textContent=`Computer: ${computerchoice}`;
    
    resultdisplay.textContent=result; 
    resultdisplay.classList.remove("green","red","tie")
   
    switch (result){
        case "You Win":
            resultdisplay.classList.add("green");
            break;
        case "You Lose":
            resultdisplay.classList.add("red");
            break;
        case "Its a TIE!":
            resultdisplay.classList.add("tie");
             break;
    }

    
    switch(result){
        case "You Win":
            countp++;
            break;
        case "You Lose":
            countc++;
            break;

    }
    playerscoredisplay.textContent=countp;
    computerscoredisplay.textContent=countc;


totalgame++;
totalscoredisplay.textContent=totalgame;

    
    
    console.log(playerchoice)
   console.log(computerchoice)

}