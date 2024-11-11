class Timer {
  static timer = document.getElementById("timer");
  static myTimer() {
    let temp = 3600000;
    const timerNow = setInterval(() => {
      temp -= 1000;
      Timer.configsTemp(temp);
      if (temp <= 0) {
        clearInterval(timerNow);
        document.title = "O tempo de 1h acabou.";
      }
    }, 1000);
  }

  static configsTemp(temp) {
    const minutes = Math.floor(temp / 60000);
    const seconds = Math.floor((temp % 60000) / 1000);
    let tempoTotal = `${String(minutes).padStart(2, "0")}:${String( seconds  ).padStart(2, "0")}`;
    this.timer.innerText = tempoTotal;
    document.title = tempoTotal;
  };
}

Timer.myTimer();
