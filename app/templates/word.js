/*
var c;
function get_word() {
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5&syllables=2", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "aa94d654f7msh30b1c6b54172a86p121bf2jsnd961032cf8b8"
  }
})
.then(response => {
  console.log(response.json())
})
.catch(err => {
  console.error(err);
});
}
get_word();
*/
let word = "quint";

let word_chars = word.split('');
console.log(word_chars);
let guess = "stone";
let guess_chars = guess.split('');
console.log(guess_chars);
let dup = ['',''];
let dup_count = [0,0];
let result = ['','','','',''];
/*all of this is to store doubles and triples */
for (var i = 0; i < word_chars.length-1; i++) {
  for (var j = i+1; j < word_chars.length; j++) {
    if (dup[0] == '' && word_chars[i] == word_chars[j]) {
      dup[0] = word_chars[j];
      dup_count[0] = dup_count[0] + 1;
    } 
    else if (word_chars[i] == word_chars[j] && word_chars[i]==dup[0]){
      dup_count[0] = dup_count[0] + 1;
    }
    else if(word_chars[i] == word_chars[j] && dup[0] != ''){
      dup[1] = word_chars[i];
      dup_count[1] = dup_count[1] + 1;
    }
  }
}
console.log(dup);
if(dup[0] == ''){
  for (var i = 0; i < guess_chars.length; i++) {
    for(var j = 0; j < word_chars.length; j++){
      if(guess_chars[i]==word_chars[j] && j==i){
        result[i] = 'green';
      }
      else if(guess_chars[i]==word_chars[j] && j != i){
        result[i] = 'yellow';
      }
    }
  }
}
