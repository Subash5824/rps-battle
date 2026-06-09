/*
   const strt=document.querySelector("#strt");
    const rck=document.querySelector("#rck");
    const pap=document.querySelector("#pap");
    const scior=document.querySelector("#scior");
    const popup=document.querySelector("#popup");
    const ok=document.querySelector("#ok")
   console.log(popup)
   console.log(ok);
   
   strt.addEventListener("click",()=>{
    popup.classList.add("open");
   });
    ok.addEventListener("click",()=>{
      popup.classList.remove("open");
    });
   let playerchoice=null;
const game=(choose)=>
    {
      switch (choose)
        {
          case "rock":
          console.log("rock");
          break;
          case "paper":
          console.log("paper");
          break;
          case "scissor":
          console.log("scissor");
          break;
          default:
          console.log("invalid choice");

         }
         return choose;
    };
rck.addEventListener("click",()=>{
    playerchoice=game("rock")
  
});
pap.addEventListener("click",()=>{
 playerchoice=game("paper")
});
scior.addEventListener("click",()=>{
 playerchoice=game("scissor");

});

const getpcchoice=()=>{
    const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return(rpsArray[randomNumber]);
};
const pcchoose=getpcchoice();
//console.log(pcchoose)

const generate=(player,computer)=>
{
  const winner=player===computer ? "Tie game!"
    : player === "rock" && computer === "paper"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "paper" && computer === "scissors"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "scissors" && computer === "rock"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
      return winner;
      
};


const result=generate(playerchoice,pcchoose);
console.log(result);

*/
const strt = document.querySelector("#strt");
const rck = document.querySelector("#rck");
const pap = document.querySelector("#pap");
const scior = document.querySelector("#scior");
const popup = document.querySelector("#popup");
const ok = document.querySelector("#ok");

console.log(popup);
console.log(ok);


strt.addEventListener("click", () => {
    popup.classList.add("open");
   

});

ok.addEventListener("click", () => {
    popup.classList.remove("open");
});


const game = (choose) => {
    switch (choose) {
        case "rock":
            console.log("choosed rock");
            break;
        case "paper":
            console.log("choosed paper");
            break;
        case "scissor":
            console.log("choosed scissor");
            break;
        default:
            console.log("invalid choice");
    }
    return choose;
};


const getpcchoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissor"];
    return rpsArray[randomNumber];
};

const generate = (player, computer) => 
  {
    const winner=player=== computer  
            ? "Tie game!"  //true
            : player === "rock" && computer === "paper" //false
            ? `player: ${player}\nComputer: ${computer}\n Computer wins!`
            : player=== "paper" && computer === "scissor"
            ? `player: ${player}\n Computer: ${computer}\n Computer wins!`
            : player === "scissor" && computer === "rock"
            ? `player: ${player}\n Computer:${computer} \n Computer wins!`
            : `player: ${player}\n Computer: ${computer}\n player wins!`;
      return winner;
};

rck.addEventListener("click", () => {
    let playerchoice = game("rock");
    let pcchoose = getpcchoice();
    let result = generate(playerchoice, pcchoose);
    alert(result);
    
});

pap.addEventListener("click", () => {
    let playerchoice = game("paper");
    let pcchoose = getpcchoice();
  let result = generate(playerchoice, pcchoose);
  alert(result);
});

scior.addEventListener("click", () => {
    let playerchoice = game("scissor");
    let pcchoose = getpcchoice();
    let result = generate(playerchoice, pcchoose);
    alert(result);
});

