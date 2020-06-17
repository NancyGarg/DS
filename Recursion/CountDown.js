// It gives the count down from the given number

function countDown(num) {
  if (num <= 0) {
    console.log("All Done!!!!!");
  } else {
    console.log(num);
    num--;
    countDown(num);
  }
}
countDown(6);
