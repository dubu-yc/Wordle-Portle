let FullList;
let Guesses = 6;
let Champ;
let NumOfChamp;
let NumOfGuessChamp;
let py_data = fetch('/champget')
.then(function(response){
  return response.json();
})
.then(data => {
  FullList = data;
  getChamp();
  document.addEventListener('keydown',checkChamp);



function getChamp() {
  NumOfChamp = Math.floor(Math.random() * 158);
  Champ = FullList[NumOfChamp][0];
}


function checkChamp(e) {
  if(e.key == "Enter" && validChamp()){
    Guesses--;
    if(Guesses < 0) {
      console.log("Too Bad So Sad, You Inted");
    } else {
      console.log(Guesses + " Guesses Remaining");
      //Name Check
      if(FullList[NumOfGuessChamp][0] == FullList[NumOfChamp][0]) {
        console.log("Correct Champion");
      } else {
        console.log("Wrong Champion");
      }
      //Class
      if(FullList[NumOfGuessChamp][1] == FullList[NumOfChamp][1]) {
        console.log("Correct Class");
      } else {
        console.log("Wrong Class");
      }
      //Region
      if(FullList[NumOfGuessChamp][2] == FullList[NumOfChamp][2]) {
        console.log("Correct Region");
      } else {
        console.log("Wrong Region");
      }
      //BE
      if(FullList[NumOfGuessChamp][3] == FullList[NumOfChamp][3]) {
        console.log("Correct Blue Essence Cost");
      } else if(parseInt(FullList[NumOfGuessChamp][3]) > parseInt(FullList[NumOfChamp][3])) {
        console.log("Too Expensive");
      } else {
        console.log("Too Cheap");
      }
      //BE
      if(FullList[NumOfGuessChamp][4] == FullList[NumOfChamp][4]) {
        console.log("Correct Role");
      } else {
        console.log("Wrong Role");
      }
    }
  } else {
    console.log("That isnt a champion");
  }
}

function validChamp(e) {
  a = 0;
  while (a < 158){
    if(FullList[a][0] == document.getElementById("cname").value) {
      console.log(document.getElementById("cname").value);
      NumOfGuessChamp = a;
      return true;
    }
    a++;
  }
}
})
