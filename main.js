const userScore = 0;
const compuScore = 0;
const userScore_span = document.querySelector("#user-score");
const compuScore_span = document.querySelector("#comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const piedra_div = document.querySelector("#r");
const papel_div = document.querySelector("#p");
const tijeras_div = document.querySelector("#s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("Tu Ganas");
            break;
        case "rr":
        case "ss":
        case "pp":
            console.log("Empate");
            break;
        case "ps":
        case "sr":
        case "rp":
            console.log("Tu pierdes");
            break;
        default:
            console.log("Error");
            break;
    }
}

function main(){
    getComputerChoice();
    piedra_div.addEventListener('click', () => game('r'));
    papel_div.addEventListener('click', ()=> game('p'));
    tijeras_div.addEventListener('click', ()=> game('s'));
}
main();