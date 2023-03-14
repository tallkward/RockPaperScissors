//Computers choice in RPS
const options = ['rock', 'paper', 'scissors'];
const index = Math.floor(Math.random() * options.length);
const choice = options[index];

//Users choice of RPS 
let user = prompt('type either rock, paper or scissors in lowercase');

function game(){
    if(user == choice){
        console.log("You selected both selected " + choice + ". Please refresh and try again!")
    }else{
        console.log('You selected ' + user + ' while the computer selected ' + choice)
    }
}

function winner(){
    if(user == choice){
        console.log('draw')
    }else if(user == 'rock' && choice == 'scissors'){
        console.log("rock crushes scissors, you win!")
    }else if(user == 'scissors' && choice =='paper'){
        console.log("scissors cuts paper, you win!")
    }else if(user == 'paper' && choice =='rock'){
        console.log("paper covers rock, you win!")
    }else{
        console.log("you lost, please refresh and try again")
    }
}


game()
winner()