import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // const dateTimePickerInput = document.getElementById('datetime - picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let timerId = null;



startBtn.addEventListener('click', onTimeStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {

    // if (selectedDates[0] - new Date() > 0) {
    //   startBtn.disabled = false;
    // } else {
    //   startBtn.disabled = true;
    //   Notify.failure('Please choose a date in the future');
    // }

    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    // selectedDates[0] = new Date();
    } else {
      startBtn.disabled = false;
      timerId = selectedDates[0];
    }
  },
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



function addZero(value) {
  return String(value).padStart(2, 0);
}


function onTimeStart() {
  const selectedDate = fp.selectedDates[0];

    timerId = setInterval(() => {
      const startTime = new Date();
      const countDown = selectedDate - startTime;
      startBtn.disabled = true;

      if (countDown <= 0) {
        clearInterval(timerId);
        return;
      }
      updateTimeView(convertMs(countDown));
  }, 1000);
}

function updateTimeView({ days, hours, minutes, seconds }) {
  dataDays.innerText = addZero(days);
  dataHours.innerText = addZero(hours);
  dataMinutes.innerText = addZero(minutes);
  dataSeconds.innerText = addZero(seconds);
}


const fp = flatpickr('#datetime-picker', options);


