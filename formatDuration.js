function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const secondsIn = 60;

  const minutes = Math.floor(seconds / secondsIn);
  const secs = seconds % secondsIn;

  if (minutes > secondsIn) {
    const hours = Math.floor(minutes / secondsIn);
    return `${hours} hours and ${minutes % secondsIn} minutes`;
  }

  return `${minutes} minute and ${secs} seconds`;
}

console.log(formatDuration(200));
console.log(formatDuration(3662));
console.log(formatDuration(0));
