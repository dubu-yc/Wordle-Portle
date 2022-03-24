let FullList;
let Guesses = 6;
let Champ;
let NumOfChamp;
let NumOfGuessChamp;
let p = 0;
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
    if(Guesses <= 0) {
      g1.innerHTML = "Too bad, so sad, you inted";
      g2.innerHTML = "The correct champion was: " + FullList[NumOfChamp][0];
      g3.innerHTML = "";
      g4.innerHTML = "";
      g5.innerHTML = "";
      g6.innerHTML = "";
      console.log('incorrect');
        $.post( "/yordle", {
          js_data : 'incorrect'
        });
    } else {
      let info = '';
      g0.innerHTML = '';
      console.log(Guesses + " Guesses Remaining");
      //Name Check
      if(FullList[NumOfGuessChamp][0] == FullList[NumOfChamp][0]) {
        info += FullList[NumOfGuessChamp][0] + ": Correct Champion, ";
        console.log('correct');
        $.post( "/yordle", {
          js_data : 'correct'
        });
      } else {
        info += ": Wrong Champion, ";
      }
      //Class
      if(FullList[NumOfGuessChamp][1] == FullList[NumOfChamp][1]) {
        info += "Correct Class, ";
      } else {
        info += "Wrong Class, ";
      }
      //Region
      if(FullList[NumOfGuessChamp][2] == FullList[NumOfChamp][2]) {
        info += "Correct Region, ";
      } else {
        info += "Wrong Region, ";
      }
      //BE
      if(FullList[NumOfGuessChamp][3] == FullList[NumOfChamp][3]) {
        info += "Correct BE cost, ";
      } else if(parseInt(FullList[NumOfGuessChamp][3]) > parseInt(FullList[NumOfChamp][3])) {
        info += "Too Expensive, ";
      } else {
        info += "Too Cheap, ";
      }
      //BE
      if(FullList[NumOfGuessChamp][4] == FullList[NumOfChamp][4]) {
        info += "Correct Role";
      } else {
        info += "Wrong Role";
      }
      if(p == 0){
        g1.innerHTML = FullList[NumOfGuessChamp][0] + info;
      }
      else if(p==1){
        g2.innerHTML = FullList[NumOfGuessChamp][0]+ info;
      }
      else if(p==2){
        g3.innerHTML = FullList[NumOfGuessChamp][0] + info;
      }
      else if(p==3){
        g4.innerHTML = FullList[NumOfGuessChamp][0]+ info;
      }
      else if(p==4){
        g5.innerHTML = FullList[NumOfGuessChamp][0]+ info;
      }
      else if(p==5){
        g6.innerHTML = FullList[NumOfGuessChamp][0]+ info;
      }
      console.log(info);
      p+=1;
    }
  } else {
    g0.innerHTML = "Invalid Champion";
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
