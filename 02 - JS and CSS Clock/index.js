const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');


const moveHands = () => {
  const date = new Date();
  const secs = date.getSeconds();
  const mins = date.getMinutes();
  const hours = date.getHours();
  const secDegree = ((secs / 60) * 360) + 90;
  const minDegree = ((mins / 60) * 360) + 90;
  const hourDegree = ((hours / 12) * 360) + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  secs === 59 ? removeTransition(secHand) : enableTransition(secHand);
  mins === 59 ? removeTransition(minHand) : enableTransition(minHand);
  hours === 11 ? removeTransition(hourHand) : enableTransition(hourHand);
}

const removeTransition = (hand) => {
  hand.style.transition = null;
}

const enableTransition = (hand) => {
  hand.style.transition = 'all 0.05s';
}

setInterval(moveHands, 1000);

moveHands();