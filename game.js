let playerScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    /*console.log(choice);*/
    choice.addEventListener("click",()=>{
      const userchoice = choice.getAttribute('id');
       /* console.log(userchoice + " was clicked");*/
        game(userchoice);
    })
})
const getcomp=()=>{
    const choice=["rock","paper","scissors"];
    const ind=Math.floor(Math.random()*3);
    /*console.log("computer choice is " + choice[ind]);*/
    return choice[ind];
}
const game=(userchoice)=>{
    const computerchoice = getcomp();
 let win=false;
  if(userchoice===computerchoice){
    let res=document.querySelector(".result");
    res.innerText="It's a tie! both choosed " + userchoice;
    res.style.backgroundColor="yellow";
    res.style.color="black";
    return;
  
  }
  else if(userchoice==="rock")
  {
    win=computerchoice==='scissors'?true:false;
  }
  else if(userchoice==="paper")
  {
    win=computerchoice==='rock'?true:false;
  }
  else if(userchoice==='scissors')
  {
    win=computerchoice==='paper'?true:false;
  }
  let res=document.querySelector(".result");
    if(win){
        let playerscore=document.querySelector('#yourscore');
        playerscore.innerHTML=++playerScore;
        res.innerText="You win! " + userchoice + " beats " + computerchoice;
        
        res.style.backgroundColor="green";
    }
    else{
        let computerscore=document.querySelector('#computerscore');
        computerscore.innerHTML=++computerScore;
        res.innerText="You lose! " + computerchoice + " beats " + userchoice;
        res.style.backgroundColor="red";
    }
}
