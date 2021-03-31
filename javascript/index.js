const chronometer = new Chronometer(); 

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');




// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}
  
function printMinutes() {
  // COMEBACK TO FIX THE FOR LOOP
 // minDec.innerHTML = 0
  minUni.innerHTML = chronometer.getMinutes();
  
}

function printSeconds() {
  /*if (secUni.innerHTML == 9) {
    secUni.innerHTML = 0;
    secDec.innerHTML += 1; 
  }*/
  
  secUni.innerHTML = chronometer.currentTime;

  /*
  if (secDec.innerHTML === 5){
    secDec.innerHTML
  }*/
   

 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {

if(btnLeft.innerText === "START") {
  btnLeft.innerText = "STOP";
  btnLeft.classList = "btn stop";
  
  chronometer.startClick(printTime);

} else if (btnLeft.innerText === "STOP"){
  btnLeft.innerText = "START";
  btnLeft.classList = "btn start";

  chronometer.stopClick();
}
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

if(btnRight.innerText === "RESET") {
  btnRight.innerText = "SPLIT";
  btnRight.classList = "btn split";

  chronometer.resetClick();

} else if (btnRight.innerText === "SPLIT") {
  btnRight.innerText = "RESET";
  btnRight.classList = "btn reset";

  chronometer.splitClick();
} 
});
