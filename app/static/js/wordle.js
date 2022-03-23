let num_guesses = 6;
let row = '';
let pos = 1;
let word;
let word_chars;
let guess;
let guess_chars = ['','','','',''];
let py_data = fetch('/wordget')
.then(function(response){
  return response.json();
})
.then(data => {
console.log(data);
word = data;
let word_chars = word.split('');
word_chars.pop();
console.log(word_chars);
document.addEventListener('keydown',letter);
row = 'a';
let curr = row + pos;
function letter(e) {
  let inp = e.key
  curr = row + pos;
  console.log(inp);
  if(inp == 'Backspace'){
    if(pos > 0){
      pos = pos - 1;
    }
  }
  /*
  else if(pos != 9 && (inp != 'a')){ //make it so they can only do letters
    
  }
  */
  else if(inp == 'Enter' && pos == 6){
    if(row == 'a'){
      let result = check_word(a1.innerHTML + a2.innerHTML + a3.innerHTML + a4.innerHTML + a5.innerHTML);
      console.log(result);
      num_guesses = num_guesses - 1;
      for (var i = 0; i < result.length; i++) {
        if(result[i] == 'yellow'){
          if(i == 0){
            a1.style = "background-color: yellow;"
          }
          else if(i==1){
            a2.style = "background-color: yellow;"
          }
          else if(i==2){
            a3.style = "background-color: yellow;"
          }
          else if(i==3){
            a4.style = "background-color: yellow;"
          }
          else if(i==4){
            a5.style = "background-color: yellow;"
          }
        }
        else if(result[i] == 'green'){
          if(i == 0){
            a1.style = "background-color: green;"
          }
          else if(i==1){
            a2.style = "background-color: green;"
          }
          else if(i==2){
            a3.style = "background-color: green;"
          }
          else if(i==3){
            a4.style = "background-color: green;"
          }
          else if(i==4){
            a5.style = "background-color: green;"
          }
        }
      }
      row = 'b';
    }
    else if(row == 'b'){
      let result = check_word(b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML + b5.innerHTML);
      console.log(result);
      num_guesses = num_guesses - 1;
      for (var i = 0; i < result.length; i++) {
        if(result[i] == 'yellow'){
          if(i == 0){
            b1.style = "background-color: yellow;"
          }
          else if(i==1){
            b2.style = "background-color: yellow;"
          }
          else if(i==2){
            b3.style = "background-color: yellow;"
          }
          else if(i==3){
            b4.style = "background-color: yellow;"
          }
          else if(i==4){
            b5.style = "background-color: yellow;"
          }
        }
        else if(result[i] == 'green'){
          if(i == 0){
            b1.style = "background-color: green;"
          }
          else if(i==1){
            b2.style = "background-color: green;"
          }
          else if(i==2){
            b3.style = "background-color: green;"
          }
          else if(i==3){
            b4.style = "background-color: green;"
          }
          else if(i==4){
            b5.style = "background-color: green;"
          }
        }
      }
      row = 'c';
    }
    else if(row == 'c'){
      let result = check_word(c1.innerHTML + c2.innerHTML + c3.innerHTML + c4.innerHTML + c5.innerHTML);
      console.log(result);
      num_guesses = num_guesses - 1;
      for (var i = 0; i < result.length; i++) {
        if(result[i] == 'yellow'){
          if(i == 0){
            c1.style = "background-color: yellow;"
          }
          else if(i==1){
            c2.style = "background-color: yellow;"
          }
          else if(i==2){
            c3.style = "background-color: yellow;"
          }
          else if(i==3){
            c4.style = "background-color: yellow;"
          }
          else if(i==4){
            c5.style = "background-color: yellow;"
          }
        }
        else if(result[i] == 'green'){
          if(i == 0){
            c1.style = "background-color: green;"
          }
          else if(i==1){
            c2.style = "background-color: green;"
          }
          else if(i==2){
            c3.style = "background-color: green;"
          }
          else if(i==3){
            c4.style = "background-color: green;"
          }
          else if(i==4){
            c5.style = "background-color: green;"
          }
        }
      }
      row = 'd';
    }
    else if(row == 'd'){
      let result = check_word(d1.innerHTML + d2.innerHTML + d3.innerHTML + d4.innerHTML + d5.innerHTML);
      console.log(result);
      num_guesses = num_guesses - 1;
      for (var i = 0; i < result.length; i++) {
        if(result[i] == 'yellow'){
          if(i == 0){
            d1.style = "background-color: yellow;"
          }
          else if(i==1){
            d2.style = "background-color: yellow;"
          }
          else if(i==2){
            d3.style = "background-color: yellow;"
          }
          else if(i==3){
            d4.style = "background-color: yellow;"
          }
          else if(i==4){
            d5.style = "background-color: yellow;"
          }
        }
        else if(result[i] == 'green'){
          if(i == 0){
            d1.style = "background-color: green;"
          }
          else if(i==1){
            d2.style = "background-color: green;"
          }
          else if(i==2){
            d3.style = "background-color: green;"
          }
          else if(i==3){
            d4.style = "background-color: green;"
          }
          else if(i==4){
            d5.style = "background-color: green;"
          }
        }
      }
      row = 'e';
    }
    else if(row == 'e'){
      let result = check_word(e1.innerHTML + e2.innerHTML + e3.innerHTML + e4.innerHTML + e5.innerHTML);
      console.log(result);
      num_guesses = num_guesses - 1;
      for (var i = 0; i < result.length; i++) {
        if(result[i] == 'yellow'){
          if(i == 0){
            e1.style = "background-color: yellow;"
          }
          else if(i==1){
            e2.style = "background-color: yellow;"
          }
          else if(i==2){
            e3.style = "background-color: yellow;"
          }
          else if(i==3){
            e4.style = "background-color: yellow;"
          }
          else if(i==4){
            e5.style = "background-color: yellow;"
          }
        }
        else if(result[i] == 'green'){
          if(i == 0){
            e1.style = "background-color: green;"
          }
          else if(i==1){
            e2.style = "background-color: green;"
          }
          else if(i==2){
            e3.style = "background-color: green;"
          }
          else if(i==3){
            e4.style = "background-color: green;"
          }
          else if(i==4){
            e5.style = "background-color: green;"
          }
        }
      }
      row = 'f';
    }
    else if(row == 'f'){
      let result = check_word(f1.innerHTML + f2.innerHTML + f3.innerHTML + f4.innerHTML + f5.innerHTML);
      console.log(result);
      num_guesses = num_guesses - 1;
      for (var i = 0; i < result.length; i++) {
        if(result[i] == 'yellow'){
          if(i == 0){
            f1.style = "background-color: yellow;"
          }
          else if(i==1){
            f2.style = "background-color: yellow;"
          }
          else if(i==2){
            f3.style = "background-color: yellow;"
          }
          else if(i==3){
            f4.style = "background-color: yellow;"
          }
          else if(i==4){
            f5.style = "background-color: yellow;"
          }
        }
        else if(result[i] == 'green'){
          if(i == 0){
            f1.style = "background-color: green;"
          }
          else if(i==1){
            f2.style = "background-color: green;"
          }
          else if(i==2){
            f3.style = "background-color: green;"
          }
          else if(i==3){
            f4.style = "background-color: green;"
          }
          else if(i==4){
            f5.style = "background-color: green;"
          }
        }
      }
    }
    pos = 1;
  }
  else if(pos == 6){
    pos = 6;
  }
  else if(curr == 'a1'){
    a1.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'a2'){
    a2.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'a3'){
    a3.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'a4'){
    a4.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'a5'){
    a5.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b1'){
    b1.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b2'){
    b2.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b3'){
    b3.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b4'){
    b4.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b5'){
    b5.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c1'){
    c1.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c2'){
    c2.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c3'){
    c3.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c4'){
    c4.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c5'){
    c5.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd1'){
    d1.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd2'){
    d2.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd3'){
    d3.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd4'){
    d4.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd5'){
    d5.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e1'){
    e1.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e2'){
    e2.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e3'){
    e3.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e4'){
    e4.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e5'){
    e5.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f1'){
    f1.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f2'){
    f2.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f3'){
    f3.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f4'){
    f4.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f5'){
    f5.innerHTML = inp;
    pos = pos + 1;
  }
}

/*
There is an array of their guess. When they press a key, it updates the array and the display (each box has a different ID)
If there are 5 letters and they press enter, the js array checks if it is a word first by adding each character to a string
If it isn't, it displays in some div block "not a word"
If it is, num_guesses is decremented, and the function to check the word is called
*/
function check_word(guess) {
  guess_chars = guess.split('');
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
  //sets the colors
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
  //supposed to remove one if there are too many double letters in the guess
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
  return(result);
}
})
