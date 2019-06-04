var userScore = 0;
var compuScore = 0;
const userScore_span = document.querySelector("#user-score");
const compuScore_span = document.querySelector("#comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const piedra_div = document.querySelector("#r");
const papel_div = document.querySelector("#p");
const tijeras_div = document.querySelector("#s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertWord(letter){
    if(letter === "r") return "Piedra";
    if(letter === "p") return "Papel";
    if(letter === "s") return "Tijeras";
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertWord(userChoice)} es mejor que ${convertWord(computerChoice)}. 
                            <br/>¡Tu Ganas!"`;
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertWord(userChoice)} y ${convertWord(computerChoice)} son iguales. 
                            <br/>¡Empate!"`;
}
function lose(userChoice, computerChoice){
    compuScore++;
    compuScore_span.innerHTML = compuScore;
    result_p.innerHTML = `${convertWord(userChoice)} no es mejor que ${convertWord(computerChoice)}. 
                            <br/>¡Tu Pierdes!"`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
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