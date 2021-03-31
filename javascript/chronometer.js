class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      
     if (printTime) printTime();
    }, 1000);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime/ 60); 
    return currentTimeMin;
  }
  getSeconds() {
    let currentTimesec = this.currentTime % 60;
    return currentTimesec;
  }
  twoDigitsNumber(num) {
    let twoDigits = ("0" + num).slice(-2); 
    return twoDigits;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`;

  }
}
