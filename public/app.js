var inputMinutes = parseInt(prompt('Enter the minutes you want : '));
var inputSeconds = parseInt(prompt('Enter the seconds that you want : '));
var inputMilli = parseInt(prompt('Enter the Milli seconds that you want : '));


var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var milli = document.getElementById('milli');


minutes.innerHTML = inputMinutes;
seconds.innerHTML = inputSeconds;
milli.innerHTML = inputMilli;

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

function timer(){
    inputMilli++;
    milli.innerHTML = inputMilli;
if(inputMilli >= 9){ 
       inputSeconds--;
       if(inputSeconds == 0){
        inputSeconds = 60;
        inputSeconds--;
        inputMinutes--;   
    }
    seconds.innerHTML = inputSeconds;
    minutes.innerHTML = inputMinutes;
    inputMilli = 0;
}
if(inputMinutes == 0 && inputSeconds == 1){
    reset();
}
}

function start(){
 interval = setInterval(timer, 100);
 startButton.disabled = true;
 stopButton.disabled = false;
 resetButton.disabled = false;
}

function stop(){
    clearInterval(interval);
    stopButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
}

function reset(){
    stop();
    inputMinutes = "00";
    inputSeconds = "00";
    inputMilli = "00";
   minutes.innerHTML = inputMinutes;
    seconds.innerHTML = inputSeconds;
   milli.innerHTML = inputMilli;
   stopButton.disabled = false;
    startButton.disabled = true;
    resetButton.disabled = true;    
}