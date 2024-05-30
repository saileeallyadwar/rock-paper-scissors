let userScore=0;
let computerScore=0;

const userpara=document.querySelector("#user-score");
const compupara=document.querySelector("#computer-score");
const choices=document.querySelectorAll(".choice");
//To generate a random number
const computerChoice=()=>{
    let arr=["rock","paper","scissors"];
    let i=Math.floor(Math.random()*arr.length);
    return arr[i];
}

const draw=()=>{
    document.querySelector("#msg").innerHTML="It was Draw!";
    document.querySelector("#msg").style.backgroundColor="#081b31";
    console.log("Game was a draw");
}

const showwinner=(userChoice,comp,win)=>{
    if(win){
        document.getElementById("msg").style.backgroundColor="green";
        document.getElementById("msg").innerHTML=`Congratulations! Your ${userChoice} beats ${comp}`;
        userScore++;
        userpara.innerText=userScore;
    }
    else{
        document.getElementById("msg").style.backgroundColor="red";
        document.getElementById("msg").innerHTML=`You have lost! ${comp} beats your ${userChoice}`;
        computerScore++;
        compupara.innerText=computerScore;
    }
}

const game=(userChoice) =>{
    console.log(userChoice);
    let comp=computerChoice();
    console.log("Computer's choice is ",comp);
    if(comp===userChoice){
        draw();
    }
    else{
        let win=true;
        if(userChoice==="rock"){
            win = comp==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            win = comp==="scissors" ? false:true;
        }
        else{
            win = comp==="rock" ? false:true;
        }
        console.log(win);
        showwinner(userChoice,comp,win);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log("Your choice is ",userChoice);
        game(userChoice);

    })
})