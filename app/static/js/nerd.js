let c = 3;
var equation = ['','','','','','','',''];
var guess = ['','','','','','','',''];
var result = ['','','','','','','',''];
var dup = ['','',''];
var dup_count = [0,0,0];
let dup_guess = ['','',''];
let dup_guess_count = [0,0,0];
var operation = '';
var digits = 0;
var success = false;
var res = 0;
let pos = 1;
/*generating a random equation */
function generate() {
  //the first number and operation
  digits = 0;
  c = Math.floor(Math.random() * 10);
  if (c < 2) {
    num1 = Math.floor(Math.random() * 10);
    let op = Math.floor(Math.random() * 2);
    if(op == 0){
      operation = '+';
    }
    if(op == 1){
      operation = '*';
    }
    digits = digits + 1;
  }
  else if(c < 6){
    num1 = Math.floor(Math.random()*90 + 10);
    let op = Math.floor(Math.random() * 3);
    if(op == 0){
      operation = '+';
    }
    else if(op == 1){
      operation = '*';
    }
    else if(op == 2){
      operation = '-';
    }
    digits = digits + 2;
  }
  else{
    num1 = Math.floor(Math.random()*900+100);
    operation = '/';
    digits = digits + 3;
  }
  /*the second number */
  let d = Math.floor(Math.random() * 10);
  if(d < 4){
    num2 = Math.floor(Math.random() * 10);
    digits = digits + 1;
  }
  else if(d < 8){
    num2 = Math.floor(Math.random() * 90 + 10);
    digits = digits + 2;
  }
  else{
    num2 = Math.floor(Math.random() * 900 + 100);
    digits = digits + 3;
  }

  if(operation == '+'){
    res = num1 + num2;
  }
  if(operation == '-'){
    res = num1 - num2;
  }
  if(operation == '*'){
    res = num1 * num2;
  }
  if(operation == '/'){
    res = num1/num2;
  }
  r = res.toString();
  digits = digits + r.length;
}
while(success == false) {
  generate();
  if(digits == 6 && res > 0){
    success == true;
    break;
  }
  else{
    digits = 0;
  }
}
document.addEventListener('keydown',letter);
row = 'a';
let curr = row + pos;
function letter(e) {
  let inp = e.key
  curr = row + pos;
  console.log(curr);
  if(inp == 'Backspace'){
    pos = pos - 1;
  }
  /*
  else if(pos != 9 && (inp != '1')){ //make it so that they can only do numbers, =, p, -, x, /

  }
  */
  else if(inp == 'Enter' && pos == 9){
    if(row == 'a'){
      let result = check_eq(a1.innerHTML + a2.innerHTML + a3.innerHTML + a4.innerHTML + a5.innerHTML + a6.innerHTML + a7.innerHTML + a8.innerHTML);
      console.log(result);
      row = 'b';
    }
    else if(row == 'b'){
      let result = check_eq(b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML + b5.innerHTML + b6.innerHTML + b7.innerHTML + b8.innerHTML);
      console.log(result);
      row = 'c';
    }
    else if(row == 'c'){
      let result = check_eq(c1.innerHTML + c2.innerHTML + c3.innerHTML + c4.innerHTML + c5.innerHTML + c6.innerHTML + c7.innerHTML + c8.innerHTML);
      console.log(result);
      row = 'd';
    }
    else if(row == 'd'){
      let result = check_eq(d1.innerHTML + d2.innerHTML + d3.innerHTML + d4.innerHTML + d5.innerHTML + d6.innerHTML + d7.innerHTML + d8.innerHTML);
      console.log(result);
      row = 'e';
    }
    else if(row == 'e'){
      let result = check_eq(e1.innerHTML + e2.innerHTML + e3.innerHTML + e4.innerHTML + e5.innerHTML + e6.innerHTML + e7.innerHTML + e8.innerHTML);
      console.log(result);
      row = 'f';
    }
    else if(row == 'f'){
      let result = check_eq(f1.innerHTML + f2.innerHTML + f3.innerHTML + f4.innerHTML + f5.innerHTML + f6.innerHTML + f7.innerHTML + f8.innerHTML);
      console.log(result);
    }
    pos = 1;
  }
  else if(pos == 9){
    pos = 9;
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
  else if(curr == 'a6'){
    a6.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'a7'){
    a7.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'a8'){
    a8.innerHTML = inp;
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
  else if(curr == 'b6'){
    b6.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b7'){
    b7.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'b8'){
    b8.innerHTML = inp;
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
  else if(curr == 'c6'){
    c6.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c7'){
    c7.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'c8'){
    c8.innerHTML = inp;
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
  else if(curr == 'd6'){
    d6.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd7'){
    d7.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'd8'){
    d8.innerHTML = inp;
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
  else if(curr == 'e6'){
    e6.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e7'){
    e7.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'e8'){
    e8.innerHTML = inp;
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
  else if(curr == 'f6'){
    f6.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f7'){
    f7.innerHTML = inp;
    pos = pos + 1;
  }
  else if(curr == 'f8'){
    f8.innerHTML = inp;
    pos = pos + 1;
  }
}


e = num1.toString() + operation + num2.toString() + "=" + res.toString();
equation = e.split('');
console.log(e);
function check_eq(gues) {
  guess = gues.split('');
  let op_pos = 0;
  let op_guess = '';
  let equal_pos = 0;
  for (var i = 0; i < guess.length; i++) {
    if(guess[i] == '+'){
      op_guess = '+';
      op_pos = i;
    }
    else if(guess[i]=='-'){
      op_guess = '-';
      op_pos = i;
    }
    else if(guess[i]=='*'){
      op_guess = '*';
      op_pos = i;
    }
    else if(guess[i]=='/'){
      op_guess = '-';
      op_pos = i;
    }
    if(guess[i] == '='){
      equal_pos = i;
    }
  }

  for (var i = 0; i < op_pos; i++) {
  }
  //this stores the doubles and triples for the generated equation
  for (var i = 0; i < equation.length-1; i++) {
    for (var j = i+1; j < equation.length; j++) {
      if (dup[0] == '' && equation[i] == equation[j]) {
        dup[0] = equation[j];
        dup_count[0] = dup_count[0] + 1;
      } 
      else if (equation[i] == equation[j] && equation[i]==dup[0]){
        dup_count[0] = dup_count[0] + 1;
      }
      else if(equation[i] == equation[j] && dup[0] != '' && dup[1] == ''){
        dup[1] = equation[i];
        dup_count[1] = dup_count[1] + 1;
      }
      else if (equation[i] == equation[j] && equation[i]==dup[1]){
        dup_count[1] = dup_count[1] + 1;
      }
      else if(equation[i] == equation[j] && dup[0] != '' && dup[1] != '' && dup[2] == ''){
        dup[2] = equation[i];
        dup_count[2] = dup_count[2] + 1;
      }
      else if (equation[i] == equation[j] && equation[i]==dup[2]){
        dup_count[2] = dup_count[2] + 1;
      }
    }
  }
  //This stores the doubles and triples for the guess
  dup_guess = ['','','']
  dup_guess_count = [0,0,0]
  for (var i = 0; i < guess.length-1; i++) {
    for (var j = i+1; j < guess.length; j++) {
      if (dup_guess[0] == '' && guess[i] == guess[j]) {
        dup_guess[0] = guess[j];
        dup_guess_count[0] = dup_guess_count[0] + 1;
      } 
      else if (guess[i] == guess[j] && guess[i]==dup_guess[0]){
        dup_guess_count[0] = dup_guess_count[0] + 1;
      }
      else if(guess[i] == guess[j] && dup_guess[0] != '' && dup_guess[1] == ''){
        dup_guess[1] = guess[i];
        dup_guess_count[1] = dup_guess_count[1] + 1;
      }
      else if (guess[i] == guess[j] && guess[i]==dup_guess[1]){
        dup_guess_count[1] = dup_guess_count[1] + 1;
      }
      else if(guess[i] == guess[j] && dup_guess[0] != '' && dup_guess[1] != '' && dup_guess[2] == ''){
        dup_guess[2] = guess[i];
        dup_guess_count[2] = dup_guess_count[2] + 1;
      }
      else if (guess[i] == guess[j] && guess[i]==dup_guess[2]){
        dup_guess_count[2] = dup_guess_count[2] + 1;
      }
    }
  }
  //This sets the colors
  for (var i = 0; i < guess.length; i++) {
    for(var j = 0; j < equation.length; j++){
      if(guess[i]==equation[j] && j==i){
        result[i] = 'green';
      }
      else if(guess[i]==equation[j] && j != i && result[i] != 'green'){
        result[i] = 'yellow';
      }
    }
  }
  //This goes back to fix duplicate issues
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
}
console.log(dup);
console.log(dup_guess);
console.log()
console.log(result);
