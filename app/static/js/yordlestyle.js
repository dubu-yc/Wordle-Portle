let FullList;
let Guess;
let Champ;
let py_data = fetch('/champget')
.then(function(response){
  return response.json();
})
.then(data => {
  console.log(data);
  FullList = data;
  getChamp();
  document.addEventListener('keydown',checkChamp);



function getChamp() {
  let Num = Math.floor(Math.random() * 158);
  Champ = FullList[Num][0];
  console.log(Champ);
}


function checkChamp(e) {
  if(e.key == "Enter"){
    console.log(document.getElementById("cname").value);
  }
}
})
