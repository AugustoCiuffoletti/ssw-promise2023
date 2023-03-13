function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let slowRoot = (x) => new Promise((myResolve, myReject) => {
  if (x >= 0) {
    setTimeout(() => myResolve(Math.sqrt(x)),2000);
  } else {
    myReject("Error");
  }
});

slowRoot(5).then(
  value => myDisplayer(value),
  error => myDisplayer(error)
);
myDisplayer("Calcolo...");