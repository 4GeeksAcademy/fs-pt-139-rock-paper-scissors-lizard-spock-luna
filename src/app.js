//write your code here
console.log("Hello Rigo from the console!");


const jugar = (userChoise) => {
    const opcionesUsuario = userChoise
    const choise = ["rock", "paper", "scissors", "lizard", "spock"]

    choise.sort (() => Math.random() - 0.5);
    const numeroAlAzar = Math.floor(Math.random() * choise.length);
    const computerChoise =choise[numeroAlAzar];

    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["scissors", "rock"]
    }
    let resultado = "random"

    if  (opcionesUsuario === computerChoise){
        resultado = "empate";
    } else if (rules[opcionesUsuario].includes(computerChoise)){
        resultado = "demasiado facil";
    }else {
        resultado = "GANO EL ROBOT";
    }
    console.log(rules["rock"]);

    return `user choise ${opcionesUsuario}, computer choise ${computerChoise} so, ${resultado}`;
}
console.log(jugar("lizard"));