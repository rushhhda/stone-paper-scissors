let option=document.querySelectorAll(".option");

let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#computer-score");
let msg=document.querySelector("#msg");

let user=0;
let comp=0;

option.forEach((opt)=>{
    opt.addEventListener('click', ()=>
    {
        let userChoice=opt.getAttribute("id");
        let computerChoice=compChoice();
        game(userChoice, computerChoice);
       
    }
    )
});

const compChoice=()=>{
    let choice=["rock", "paper", "scissors"]
    let randIdx=Math.floor(Math.random()*3);
    return choice[randIdx];
    
};

const game=(userChoice, compChoice)=>{
    userWin=true;
    if (userChoice===compChoice) {
        console.log("draw");
        userWin=null;

    }
    else {
        if(userChoice==="rock") {
        userWin=compChoice==="paper"? false : true;
    }
        else if(userChoice==="paper") {
        userWin=compChoice==="scissors"? false:true;
    }
        else {
        userWin=compChoice==="rock"? false:true;
    }
    
}
 score(userChoice,compChoice,userWin);
};

let score=(userChoice,compChoice,userWin)=>{
    if (userWin) {
        user++;
        userScore.innerText=user;
        msg.innerText=`you win as ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor="pink";
    }
    else if(userWin===false){
        comp++;
        compScore.innerText=comp;
        msg.innerText=`you lose as ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="lightblue";
    }
    else{
        msg.innerText=`it's a draw as both chose ${userChoice}`;
    }
};

