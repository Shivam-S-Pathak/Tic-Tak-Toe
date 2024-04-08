let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgbox=document.querySelector(".message");
let msg = document.querySelector("#msg");
let container=document.querySelector(".container");
let newGame=document.querySelector(".newgame");
let turn=document.querySelector(".turn");

let trunO = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        if (trunO) {

            box.innerText = "O";
            trunO = false;
            document.body.style.backgroundColor="rgb(248, 118, 118)";
            turn.innerText="X's turn";
        } else {
            box.innerText = "X";
            trunO = true;
            document.body.style.backgroundColor="rgb(79, 176, 245)";
            turn.innerText="O's turn";
            
        }
        box.disabled = true;
        checkWinner();
    });
});
newGame.addEventListener('click' , ()=>{
    trunO = true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgbox.classList.add("hide");
    document.body.style.backgroundColor="rgb(79, 176, 245)";
    turn.innerText="O's turn";

});

resetBtn.addEventListener('click' , ()=>{
    trunO = true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgbox.classList.add("hide");
    document.body.style.backgroundColor="rgb(79, 176, 245)";
    turn.innerText="O's turn";

});

const checkWinner = () => {
    for (pattern of winPattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
       
        let position1=boxes[pattern[0]].innerText;
       let position2=boxes[pattern[1]].innerText;
       let position3=boxes[pattern[2]].innerText;
       if (position1 != "" &&position2 != "" && position3 != ""){
        if(position1 === position2 && position2 ===position3){
            console.log(position1+ " is Winner");
            msg.innerText= " Congrats player '"+ position1 + "' you won!!";
            msgbox.classList.remove("hide");
            for(let box of boxes){
                box.disabled=true;
            }

        }
       }
    }
}