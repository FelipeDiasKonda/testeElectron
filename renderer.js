let display = document.getElementById('display');
let nums = document.getElementsByClassName('num');
let ops = document.getElementsByClassName('op');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

let currentNum = '';
let currentOp = '';
let lastNum = '';

for(let num of nums) {
  num.addEventListener('click', function() {
    currentNum += this.value;
    display.innerText = currentNum;
  });
}

for(let op of ops) {
  op.addEventListener('click', function() {
    if(currentOp !== '') execute();
    lastNum = currentNum;
    currentNum = '';
    currentOp = this.value;
  });
}

clear.addEventListener('click', function() {
  currentNum = '';
  currentOp = '';
  lastNum = '';
  display.innerText = '';
});

equals.addEventListener('click', function() {
  execute();
});

function execute() {
  lastNum = parseFloat(lastNum);
  currentNum = parseFloat(currentNum);

  switch(currentOp) {
    case '+':
      currentNum = lastNum + currentNum;
      break;
    case '-':
      currentNum = lastNum - currentNum;
      break;
    case '*':
      currentNum = lastNum * currentNum;
      break;
    case '/':
      currentNum = lastNum / currentNum;
      break;
  }

  display.innerText = currentNum;
  currentOp = '';
}
