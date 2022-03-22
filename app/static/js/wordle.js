const num_guesses = 6;

let word;
let py_data = fetch('/wordget')
.then(function(response){
  return response.json();
})
.then(data => {
  console.log(data);
  word = data;
  let word_chars = word.split('');
  console.log(word_chars);
document.addEventListener('keydown',letter);
function letter(e) {
  log.innerHTML += ` ${e.code}`;
  console.log('hello')
}
/*
There is an array of their guess. When they press a key, it updates the array and the display (each box has a different ID)
If there are 5 letters and they press enter, the js array checks if it is a word first by adding each character to a string
If it isn't, it displays in some div block "not a word"
If it is, num_guesses is decremented, and the function to check the word is called
*/
let guess = 'esmed'
let guess_chars = guess.split('');
console.log(guess_chars);
let dup = ['',''];
let dup_count = [0,0];
let result = ['','','','',''];
//Make everything below this into one function called check_word
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
/*this stores doubles and triples of the guess */
dup_guess = ['',''];
dup_guess_count = [0,0];
for (var i = 0; i < guess_chars.length-1; i++) {
  for (var j = i+1; j < guess_chars.length; j++) {
    if (dup[0] == '' && guess_chars[i] == guess_chars[j]) {
      dup_guess[0] = guess_chars[j];
      dup_guess[0] = dup_guess_count[0] + 1;
    } 
    else if (guess_chars[i] == guess_chars[j] && guess_chars[i]==dup_guess[0]){
      dup_guess_count[0] = dup_guess_count[0] + 1;
    }
    else if(guess_chars[i] == guess_chars[j] && dup[0] != ''){
      dup_guess[1] = guess_chars[i];
      dup_guess_count[1] = dup_guess_count[1] + 1;
    }
  }
}

for (var i = 0; i < guess_chars.length; i++) {
  for(var j = 0; j < word_chars.length; j++){
    if(guess_chars[i]==word_chars[j] && j==i){
      result[i] = 'green';
    }
    else if(guess_chars[i]==word_chars[j] && j != i && result[i] != 'green'){
      result[i] = 'yellow';
    }
  }
}



for (var i = 0; i < dup.length; i++) {
  for (var j = 0; j < dup_guess.length; j++) {
    if(dup[i]==dup_guess[j]){
      for (var k = 0; k < result.length; k++) {
        if(dup_guess_count[i]>dup_count[j]){
          if(result[k]=='yellow'){
            result[k]='';
            dup_guess_count[i] = dup_count[j];
          }
        }
      }
    }
  }
}
})

