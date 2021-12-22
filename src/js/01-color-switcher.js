const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
// let isActiv = false;
const INTERVAL_DURATION = 1000;
startBtn.disabled = false;
stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function updateBodyBgColor (){
    body.style.backgroundColor =  getRandomHexColor();
}  

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(){
    console.log(`Call onStartBtnClick every ${INTERVAL_DURATION} ms`)
    // if (isActiv) {
    //     return;
    // }
    // isActiv = true;
    timerId = setInterval(updateBodyBgColor, INTERVAL_DURATION);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick(){
    // isActiv = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
    console.log(`Interval has stopped!`);
};


