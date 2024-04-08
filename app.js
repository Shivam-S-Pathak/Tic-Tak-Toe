let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgbox = document.querySelector(".message");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");
let newGame = document.querySelector(".newgame");
let chance = document.querySelector(".turn");


let trunO = true;
let count =0;

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
        if (trunO) {

            box.innerText = "O";
            trunO = false;
            document.body.style.backgroundColor = "rgb(248, 118, 118)";
            chance.innerText = "X's turn";
            document.querySelector(".player2").style.height = "30vmin";
            document.querySelector(".player2").style.width = "30vmin";
            document.querySelector(".player1").style.height = "20vmin";
            document.querySelector(".player1").style.width = "20vmin";
            resetBtn.disabled = false;
            count++;
        } else {
            box.innerText = "X";
            trunO = true;
            document.body.style.backgroundColor = "rgb(79, 176, 245)";
            chance.innerText = "O's turn";
            document.querySelector(".player1").style.height = "30vmin";
            document.querySelector(".player1").style.width = "30vmin";
            document.querySelector(".player2").style.height = "20vmin";
            document.querySelector(".player2").style.width = "20vmin";
            count++;

        }
        box.disabled = true;
        checkWinner();
    });
});
newGame.addEventListener('click', () => {
    trunO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    count=0;
    msgbox.style.visibility = "hidden";
    msgbox.style.opacity = "0";
    document.body.style.backgroundColor = "rgb(79, 176, 245)";
    chance.innerText = "O's turn";
    document.querySelector(".player1").style.height = "30vmin";
    document.querySelector(".player1").style.width = "30vmin";
    document.querySelector(".player2").style.height = "20vmin";
    document.querySelector(".player2").style.width = "20vmin";

});

resetBtn.addEventListener('click', () => {
    trunO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    count=0;
    msgbox.style.visibility = "hidden";
    msgbox.style.opacity = "0";
    document.body.style.backgroundColor = "rgb(79, 176, 245)";
    chance.innerText = "O's turn";
    document.querySelector(".player1").style.height = "30vmin";
    document.querySelector(".player1").style.width = "30vmin";
    document.querySelector(".player2").style.height = "20vmin";
    document.querySelector(".player2").style.width = "20vmin";

});

const checkWinner = () => {
    for (pattern of winPattern) {

        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                count--;
                msg.innerText = " Congratulations player '" + position1 + "' you won!!";
                chance.innerText = "";
                for (let box of boxes) {
                    box.disabled = true;
                }
                resetBtn.disabled = true;
                document.querySelector(".player1").style.height = "20vmin";
                document.querySelector(".player1").style.width = "20vmin";
                document.querySelector(".player2").style.height = "20vmin";
                document.querySelector(".player2").style.width = "20vmin";
                msgbox.style.visibility = "visible";
                msgbox.style.opacity = "1";

            }
            else if (count===9){
                msg.innerText = " oohh!! Match Draw ";
                chance.innerText = "";
                document.querySelector(".player1").style.height = "20vmin";
                document.querySelector(".player1").style.width = "20vmin";
                document.querySelector(".player2").style.height = "20vmin";
                document.querySelector(".player2").style.width = "20vmin";
                msgbox.style.visibility = "visible";
                msgbox.style.opacity = "1";

            }
        }
    }
}