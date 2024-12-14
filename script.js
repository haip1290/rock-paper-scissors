


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    // console.log("/nchoice: "+choice);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
            break;
        default:
            console.error("Invalid choice");
    }
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors: ");
    return choice;
}