const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const interval = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started!');
  },
  onTick() {
    console.log('Timer is ticking down!');
  },
  onComplete() {
    console.log('Timer completed!');
  }
});
