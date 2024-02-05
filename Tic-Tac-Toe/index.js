let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color= "black";
      box.style.backgroundColor = "red";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color= "black";
      box.style.backgroundColor = "yellow";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
     
    }
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            // console.log("Winner",pos1val);
            showWinner(pos1val);
        }
      }
  }
};
const showWinner = (winner) =>{
       msg.innerText = `congratulations, winner is ${winner}`;
       msgContainer.classList.remove("hide");
       disableBox();
}

const resetGame = () =>{
   turnO = true;
   enableBox();
   msgContainer.classList.add("hide");
   
   boxes.forEach((box) =>{
    box.style.backgroundColor = ""; // Reset background color
    box.style.color = ""; // Reset text color
   })
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);