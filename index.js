let slowRoot = (x) =>
  new Promise((myResolve, myReject) => {
    if (x >= 0) {
      setTimeout(() => myResolve(Math.sqrt(x)), 2000);
    } else {
      myReject('Il numero è negativo!');
    }
  });

window.handler = () => {
  let x = document.getElementById('value').value;
  console.log(x);
  slowRoot(x).then(
    (result) => (document.getElementById('demo').innerHTML = "Il risultato è "  + result),
    (error) => (document.getElementById('demo').innerHTML = error)
  );
  document.getElementById('demo').innerHTML = 'Calcolo...';
};
