let champ;
let py_data = fetch('/champget')
.then(function(response){
  return response.json();
})
.then(data => {
  console.log(data);
  champ = data;
})
