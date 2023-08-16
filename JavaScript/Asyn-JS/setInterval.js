// setInterval()
// The setInterval() function is used to repeatedly execute a given function or code snippet at a specified interval (in milliseconds).
//  It continues executing until explicitly stopped with clearInterval().

// clearInterval()
// The clearTimeout() function is used to cancel the execution of code scheduled with setTimeout() before it has a chance to run.

const intervalId = setInterval(() => {
    console.log('Interval executed every 2000ms');
  }, 2000);
  
  function stop() {
    clearInterval(intervalId)
  }

  setTimeout(stop, 5000)