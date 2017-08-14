const secondsHand = document.querySelector('.second-hand');

const getSeconds = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegree = (seconds / 60) * 360;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`
}


setInterval(getSeconds, 1000);