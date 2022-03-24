let c = 3;
let num_guesses = 6;
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
      operation = 'p';
    }
    if(op == 1){
      operation = 'x';
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

  if(operation == 'p'){
    res = num1 + num2;
  }
  if(operation == '-'){
    res = num1 - num2;
  }
  if(operation == 'x'){
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
console.log(equation)
document.addEventListener('keydown',letter);
row = 'a';
let curr = row + pos;
function letter(e) {
  let inp = e.key
  curr = row + pos;
  console.log(curr);
  if(inp == 'Backspace'){
    pos = pos - 1;
    curr = row + pos;
  if(curr == 'a1'){
    a1.innerHTML = 'a';
  }
  else if(curr == 'a2'){
    a2.innerHTML = 'b';
  }
  else if(curr == 'a3'){
    a3.innerHTML = 'c';
  }
  else if(curr == 'a4'){
    a4.innerHTML = 'd';
  }
  else if(curr == 'a5'){
    a5.innerHTML = 'e';
  }
  else if(curr == 'a6'){
    a6.innerHTML = 'f';
  }
  else if(curr == 'a7'){
    a7.innerHTML = 'g';
  }
  else if(curr == 'a8'){
    a8.innerHTML = 'h';
  }
  else if(curr == 'b1'){
    b1.innerHTML = 'a';
  }
  else if(curr == 'b2'){
    b2.innerHTML = 'b';
  }
  else if(curr == 'b3'){
    b3.innerHTML = 'c';
  }
  else if(curr == 'b4'){
    b4.innerHTML = 'd';
  }
  else if(curr == 'b5'){
    b5.innerHTML = 'e';
  }
  else if(curr == 'b6'){
    b6.innerHTML = 'f';
  }
  else if(curr == 'b7'){
    b7.innerHTML = 'g';
  }
  else if(curr == 'b8'){
    b8.innerHTML = 'h';
  }
  else if(curr == 'c1'){
    c1.innerHTML = 'a';
  }
  else if(curr == 'c2'){
    c2.innerHTML = 'b';
  }
  else if(curr == 'c3'){
    c3.innerHTML = 'c';
  }
  else if(curr == 'c4'){
    c4.innerHTML = 'd';
  }
  else if(curr == 'c5'){
    c5.innerHTML = 'e';
  }
  else if(curr == 'c6'){
    c6.innerHTML = 'f';
  }
  else if(curr == 'c7'){
    c7.innerHTML = 'g';
  }
  else if(curr == 'c8'){
    c8.innerHTML = 'h';
  }
  else if(curr == 'd1'){
    d1.innerHTML = 'a';
  }
  else if(curr == 'd2'){
    d2.innerHTML = 'b';
  }
  else if(curr == 'd3'){
    d3.innerHTML = 'c';
  }
  else if(curr == 'd4'){
    d4.innerHTML = 'd';
  }
  else if(curr == 'd5'){
    d5.innerHTML = 'e';
  }
  else if(curr == 'd6'){
    d6.innerHTML = 'f';
  }
  else if(curr == 'd7'){
    d7.innerHTML = 'g';
  }
  else if(curr == 'd8'){
    d8.innerHTML = 'h';
  }
  else if(curr == 'e1'){
    e1.innerHTML = 'a';
  }
  else if(curr == 'e2'){
    e2.innerHTML = 'b';
  }
  else if(curr == 'e3'){
    e3.innerHTML = 'c';
  }
  else if(curr == 'e4'){
    e4.innerHTML = 'd';
  }
  else if(curr == 'e5'){
    e5.innerHTML = 'e';
  }
  else if(curr == 'e6'){
    e6.innerHTML = 'f';
  }
  else if(curr == 'e7'){
    e7.innerHTML = 'g';
  }
  else if(curr == 'e8'){
    e8.innerHTML = 'h';
  }
  else if(curr == 'f1'){
    f1.innerHTML = 'a';
  }
  else if(curr == 'f2'){
    f2.innerHTML = 'b';
  }
  else if(curr == 'f3'){
    f3.innerHTML = 'c';
  }
  else if(curr == 'f4'){
    f4.innerHTML = 'd';
  }
  else if(curr == 'f5'){
    f5.innerHTML = 'e';
  }
  else if(curr == 'f6'){
    f6.innerHTML = 'f';
  }
  else if(curr == 'f7'){
    f7.innerHTML = 'g';
  }
  else if(curr == 'f8'){
    f8.innerHTML = 'h';
  }
  }

  else if(inp == 'Enter' && pos == 9){
    pos = 1;
    if(row == 'a'){
      let result = check_eq(a1.innerHTML + a2.innerHTML + a3.innerHTML + a4.innerHTML + a5.innerHTML + a6.innerHTML + a7.innerHTML + a8.innerHTML);
      console.log(result);
      if(result == "n"){
        console.log("not an equation")
        a1.innerHTML = 'a';
        a2.innerHTML = 'b';
        a3.innerHTML = 'c';
        a4.innerHTML = 'd';
        a5.innerHTML = 'e';
        a6.innerHTML = 'f';
        a7.innerHTML = 'g';
        a8.innerHTML = 'h';
      }
      else{
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
          else if(i==5){
            a6.style = "background-color: yellow;"
          }
          else if(i==6){
            a7.style = "background-color: yellow;"
          }
          else if(i==7){
            a8.style = "background-color: yellow;"
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
          else if(i==5){
            a6.style = "background-color: green;"
          }
          else if(i==6){
            a7.style = "background-color: green;"
          }
          else if(i==7){
            a8.style = "background-color: green;"
          }
        }
      }
      row = 'b';
    }
    }
    else if(row == 'b'){
      let result = check_eq(b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML + b5.innerHTML + b6.innerHTML + b7.innerHTML + b8.innerHTML);
      console.log(result);
      if(result == "n"){
        console.log("not an equation")
        b1.innerHTML = 'a';
        b2.innerHTML = 'b';
        b3.innerHTML = 'c';
        b4.innerHTML = 'd';
        b5.innerHTML = 'e';
        b6.innerHTML = 'f';
        b7.innerHTML = 'g';
        b8.innerHTML = 'h';
      }
      else{
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
          else if(i==5){
            b6.style = "background-color: yellow;"
          }
          else if(i==6){
            b7.style = "background-color: yellow;"
          }
          else if(i==7){
            b8.style = "background-color: yellow;"
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
          else if(i==5){
            b6.style = "background-color: green;"
          }
          else if(i==6){
            b7.style = "background-color: green;"
          }
          else if(i==7){
            b8.style = "background-color: green;"
          }
        }
      }
      row = 'c';
    }
    }
    else if(row == 'c'){
      let result = check_eq(c1.innerHTML + c2.innerHTML + c3.innerHTML + c4.innerHTML + c5.innerHTML + c6.innerHTML + c7.innerHTML + c8.innerHTML);
      console.log(result);
      if(result == "n"){
        console.log("not an equation")
        c1.innerHTML = 'a';
        c2.innerHTML = 'b';
        c3.innerHTML = 'c';
        c4.innerHTML = 'd';
        c5.innerHTML = 'e';
        c6.innerHTML = 'f';
        c7.innerHTML = 'g';
        c8.innerHTML = 'h';
      }
      else{
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
          else if(i==5){
            c6.style = "background-color: yellow;"
          }
          else if(i==6){
            c7.style = "background-color: yellow;"
          }
          else if(i==7){
            c8.style = "background-color: yellow;"
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
          else if(i==5){
            c6.style = "background-color: green;"
          }
          else if(i==6){
            c7.style = "background-color: green;"
          }
          else if(i==7){
            c8.style = "background-color: green;"
          }
        }
      }
      row = 'd';
    }
    }
    else if(row == 'd'){
      let result = check_eq(d1.innerHTML + d2.innerHTML + d3.innerHTML + d4.innerHTML + d5.innerHTML + d6.innerHTML + d7.innerHTML + d8.innerHTML);
      console.log(result);
      if(result == "n"){
        console.log("not an equation")
        d1.innerHTML = 'a';
        d2.innerHTML = 'b';
        d3.innerHTML = 'c';
        d4.innerHTML = 'd';
        d5.innerHTML = 'e';
        d6.innerHTML = 'f';
        d7.innerHTML = 'g';
        d8.innerHTML = 'h';
      }
      else{
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
          else if(i==5){
            d6.style = "background-color: yellow;"
          }
          else if(i==6){
            d7.style = "background-color: yellow;"
          }
          else if(i==7){
            d8.style = "background-color: yellow;"
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
          else if(i==5){
            d6.style = "background-color: green;"
          }
          else if(i==6){
            d7.style = "background-color: green;"
          }
          else if(i==7){
            d8.style = "background-color: green;"
          }
        }
      }
      row = 'e';
    }
    }
    else if(row == 'e'){
      let result = check_eq(e1.innerHTML + e2.innerHTML + e3.innerHTML + e4.innerHTML + e5.innerHTML + e6.innerHTML + e7.innerHTML + e8.innerHTML);
      console.log(result);
      if(result == "n"){
        console.log("not an equation")
        e1.innerHTML = 'a';
        e2.innerHTML = 'b';
        e3.innerHTML = 'c';
        e4.innerHTML = 'd';
        e5.innerHTML = 'e';
        e6.innerHTML = 'f';
        e7.innerHTML = 'g';
        e8.innerHTML = 'h';
      }
      else{
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
          else if(i==5){
            e6.style = "background-color: yellow;"
          }
          else if(i==6){
            e7.style = "background-color: yellow;"
          }
          else if(i==7){
            e8.style = "background-color: yellow;"
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
          else if(i==5){
            e6.style = "background-color: green;"
          }
          else if(i==6){
            e7.style = "background-color: green;"
          }
          else if(i==7){
            e8.style = "background-color: green;"
          }
        }
      }
      row = 'f';
    }
    }
    else if(row == 'f'){
      let result = check_eq(f1.innerHTML + f2.innerHTML + f3.innerHTML + f4.innerHTML + f5.innerHTML + f6.innerHTML + f7.innerHTML + f8.innerHTML);
      console.log(result);
      if(result == "n"){
        console.log("not an equation")
        f1.innerHTML = 'a';
        f2.innerHTML = 'b';
        f3.innerHTML = 'c';
        f4.innerHTML = 'd';
        f5.innerHTML = 'e';
        f6.innerHTML = 'f';
        f7.innerHTML = 'g';
        f8.innerHTML = 'h';
      }
      else{
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
          else if(i==5){
            f6.style = "background-color: yellow;"
          }
          else if(i==6){
            f7.style = "background-color: yellow;"
          }
          else if(i==7){
            f8.style = "background-color: yellow;"
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
          else if(i==5){
            f6.style = "background-color: green;"
          }
          else if(i==6){
            f7.style = "background-color: green;"
          }
          else if(i==7){
            f8.style = "background-color: green;"
          }
        }
      }
    }
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
    if(guess[i] == 'p'){
      op_guess = '+';
      op_pos = i;
    }
    else if(guess[i]=='-'){
      op_guess = '-';
      op_pos = i;
    }
    else if(guess[i]=='x'){
      op_guess = '*';
      op_pos = i;
    }
    else if(guess[i]=='/'){
      op_guess = '/';
      op_pos = i;
    }
    if(guess[i] == '='){
      equal_pos = i;
    }
  }
  numb1 = '';
  numb2 = '';
  given = '';
  if(equal_pos == 0 || op_pos == 0 || op_pos > equal_pos){
    return "n";
  }
  for (var i = 0; i < op_pos; i++) {
    numb1+=guess[i];
  }
  for(var i = op_pos + 1; i < equal_pos; i++){
    numb2+= guess[i];
  }
  for(var i = equal_pos + 1; i < 8; i++){
    given+=guess[i];
  }
  if(op_guess == '+'){
    if(parseInt(numb1) + parseInt(numb2) != parseInt(given)){
      return "n";
    }
  }
  else if(op_guess == '-'){
    if(parseInt(numb1) - parseInt(numb2) != parseInt(given)){
      return "n";
    }
  }
  else if(op_guess == '*'){
    if(parseInt(numb1) * parseInt(numb2) != parseInt(given)){
      return "n";
    }
  }
  else if(op_guess == '/'){
    console.log(numb1)
    console.log(numb2)
    console.log(given)
    console.log(parseInt(numb1) / parseInt(numb2))
    if(parseInt(numb1) / parseInt(numb2) != parseInt(given)){
      return "n";
    }
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
  return result;
}

console.log(result);
