function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myFunction = (x) => new Promise((myResolve, myReject) => {

// some code (try to change x to 5)

  if (x >= 0) {
    setTimeout(() => myResolve(Math.sqrt(x)),2000);
  } else {
    myReject("Error");
  }
});

myFunction(5).then(
  value => myDisplayer(value),
  error => myDisplayer(error)
);
myDisplayer("Calcolo...");