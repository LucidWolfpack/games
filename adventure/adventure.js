

function greet() {
  const input = prompt("what is your name")
  alert(`hello ${input}`)

}

function startGame() {
  greet()
  const choice = prompt("Do you want to start?")
  if (choice === "yes" || "yeah" || "sure" || "maybe") {
    alert("STARTING GAME")
    scene1()

  } else {
    alert("sorry...")
  }
}

function scene1() {
  const terrain = prompt("What path do you take: forest, mountain, or desert")
  if (terrain === "forest" || "mountian" || "desert"){
      let time = prompt("Is it day or night ?") 
      if(time === "day"){
        alert ("Nice day to walk around.")
      } else if (time === "night"){
        nightTime()
      }
  }
}

function nightTime() {
  const keepGoing = prompt("It might not be safe.. do you wish to continue")
  if(keepGoing === "no"){
    alert("You made it back home safe")
    endGame()
  }else if(keepGoing === "yes"){
    strangerDanger()
  }
  
}

function strangerDanger(){
  const whatToDo = prompt("As you walk a dark figure approachs, do you.. run or confront? ")
  if(whatToDo === "confront"){
    alert("You have now been axe murdered")
    endGame()
  }else if(whatToDo === "run"){
    walkAtNight()
  }
}

function walkAtNight(){
    alert("That was close..")
    const cave = prompt("As you walk, you see a cave. Do you enter?")
    if(cave === "no"){
      alert("treasure has been missed")
      endGame()
    }else if(cave === "yes" || "maybe" || "sure"){
      alert("You found a peice of GOLD!")
      endGame()
    }
}

function endGame(){
  alert("Your adventure is over")
}


startGame()





