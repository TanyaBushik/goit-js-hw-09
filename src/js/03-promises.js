import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

btnCreatePromise.addEventListener('submit', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  };

function onPromiseCreate(e) {
  e.preventDefault();

  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1){
    inputDelay += inputStep;

    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        console.log(success.message)
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(error.message)
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

   form.reset();
  }

}

// const refs = {
//   body: document.querySelector('body'),
//   form: document.querySelector('form.form'),
//   delay: document.querySelector('[name="delay"]'),
//   step: document.querySelector('[name="step"]'),
//   amount: document.querySelector('[name="amount"]'),
// }

// refs.body.style.backgroundColor = '#f7eff4';
// refs.form.addEventListener('click', onPromiseCreate);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// function onPromiseCreate(e) {
//   e.preventDefault();

//   let valueDelay = Number(refs.delay.value);
//   let step = Number(refs.step.value);
//   let amount = Number(refs.amount.value);

//   for (let i = 1; i <= amount; i += 1) {
//     let promiseDelay = valueDelay + step * i;

//     createPromise(i, promiseDelay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }