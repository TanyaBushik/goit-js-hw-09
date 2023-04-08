
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;
startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerID = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000 )

}

function onStopClick() {
 startBtn.disabled = false;
stopBtn.disabled = true;

    clearInterval(timerID);
    
}



