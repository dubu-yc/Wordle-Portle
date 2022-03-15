function get_word() {
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "aa94d654f7msh30b1c6b54172a86p121bf2jsnd961032cf8b8"
  }
})
.then(response => {
  return response.json()
})
.catch(err => {
  console.error(err);
});
}
let c = get_word();
console.log(c)
