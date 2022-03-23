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
function letter(e) {
  let inp = e.key
  console.log(inp);
}


e = num1.toString() + operation + num2.toString() + "=" + res.toString();
equation = e.split('');
console.log(e);
guess_str = '220/4=55';
console.log(guess_str);
guess = guess_str.split('');
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
console.log(dup);
console.log(dup_guess);
console.log()
console.log(result);
