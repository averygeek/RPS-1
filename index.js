let choiceEl = document.getElementById("choice-el")
let choice2El = document.getElementById("choice2-el")

let npcChoiceEl = document.getElementById("npc-choice-el")
let npcChoice2El = document.getElementById("npc-choice2-el")

let xbtn1El = document.getElementById("xbtn1-el")
let xbtn2El = document.getElementById("xbtn2-el")

let versusEl = document.getElementById("versus-el")
let livesEl = document.getElementById("lives-el")
let pointsEl = document.getElementById("points-el")

let npcChoiceNum = []
let npcChoice = []
let continued = false
let continued2 = false
let finalChoice = ""
let npcDropChoice = ""

let player = {
    lives: 3,
    points: 0,
    choice1: "",
    choice2: ""
}

function removeChoice1() {
    if (continued === false) {
        player.choice1=""
        setChoice()
    } else {
        finalChoice = player.choice2
        choiceEl.textContent = finalChoice
        choice2El.textContent = ""
        xbtn1El.hidden = true
        xbtn2El.hidden = true
    }
}

function removeChoice2() {
    if (continued === false){
    player.choice2=""
    setChoice()
    } else {
        finalChoice = player.choice1
        choiceEl.textContent = finalChoice
        choice2El.textContent = ""
        xbtn1El.hidden = true
        xbtn2El.hidden = true
    }
}

function makeChoiceRock() {
    if (player.choice1 === "") {
        player.choice1 = "Rock"
        setChoice()
    } else if (player.choice2 === "") {
        player.choice2="Rock"
        setChoice()
    }
}

function makeChoicePaper() {
    if (player.choice1 === "") {
        player.choice1 = "Paper"
        setChoice()
    } else if (player.choice2 === "") {
        player.choice2="Paper"
        setChoice()
    }
}

function makeChoiceScissors() {
    if (player.choice1 === "") {
        player.choice1 = "Scissors"
        setChoice()
    } else if (player.choice2 === "") {
        player.choice2="Scissors"
        setChoice()
    }
}

function setChoice() {
    if (choiceEl.textContent !== player.choice1) { //stopping here every time
        choiceEl.textContent=player.choice1
    } else if (choice2El.textContent !== player.choice2) {
    choice2El.textContent=player.choice2
    }
    
}

function npc(){
    npcChoiceNum.push(Math.floor(Math.random() * 3 + 1))
    npcChoiceNum.push(Math.floor(Math.random() * 3 + 1))
    for (i=0;i<3;i++){
        if (npcChoiceNum[i] === 1){
            npcChoice.push("Rock")
        }
        if (npcChoiceNum[i] === 2){
            npcChoice.push("Paper")
        }
        if (npcChoiceNum[i] === 3){
            npcChoice.push("Scissors")
        }
    }
    npcChoiceEl.textContent = npcChoice[0]
    npcChoice2El.textContent = npcChoice[1]

    let npcRandom = Math.floor(Math.random * 10 + 1)
    if (npcRandom < 6) {
        npcDropChoice = npcChoice[0]
    } else {
        npcDropChoice = npcChoice[1]
    }
}

function cont() {
    if (continued === false && continued2 === false) {
        if (player.choice1 && player.choice2 !== "") {
            xbtn1El.style.backgroundColor = "green"
            xbtn2El.style.backgroundColor = "green"
            continued = true
            npc()
        }
    } else if (continued === true && finalChoice !== "") {

        npcChoiceEl.textContent = npcDropChoice
        npcChoice2El.textContent = ""
        choiceEl.textContent = finalChoice
        choice2El.textContent = ""
        continued = false
        continued2 = true
        if (finalChoice === npcDropChoice) {
            versusEl.textContent = "TIE"
        }
        if (finalChoice === "Rock" && npcDropChoice === "Paper"){
            player.lives -= 1
        }
        if (finalChoice === "Rock" && npcDropChoice === "Scissors"){
            player.points += 1
        }
        if (finalChoice === "Scissors" && npcDropChoice === "Rock"){
            player.lives -= 1
        }
        if (finalChoice === "Scissors" && npcDropChoice === "Paper"){
            player.points += 1
        }
        if (finalChoice === "Paper" && npcDropChoice === "Scissors"){
            player.lives -= 1
        }
        if (finalChoice === "Paper" && npcDropChoice === "Rock"){
            player.points += 1
        }
        livesEl.textContent = player.lives
        pointsEl.textContent = player.points
    } 
    else if (continued2 === true && player.lives>0){
        resetGame()     
    } else if (continued2 === true) {
        newGame()
    }
}

function resetGame() {
        xbtn1El.hidden = false
        xbtn2El.hidden = false
        xbtn1El.style.backgroundColor = "rgb(242, 79, 79)"
        xbtn2El.style.backgroundColor = "rgb(242, 79, 79)"
        npcChoiceNum = []
        npcChoice = []
        continued = false
        continued2 = false
        finalChoice = ""
        npcDropChoice = ""
        player.choice1 = ""
        player.choice2 = ""
        choiceEl.textContent= "choice 1"
        choice2El.textContent= "choice 2"
        npcChoiceEl.textContent = "Npc Choice 1"
        npcChoice2El.textContent = "Npc Choice 2"
        versusEl.textContent = "VS"
}

function newGame(){
    resetGame()
    player.lives = 3
    player.points = 0
    livesEl.textContent = player.lives
    pointsEl.textContent = player.points
}

// choiceEl.textContent=playerChoice[0]
