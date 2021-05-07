// Why we need async code
// When we need it

// Promises
// two states
// fulfilled
// resolved rejected

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('All OK!');
    reject('Somethin wrong happend');
  }, 4000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

new Promise((resolve, reject) => {
  resolve('Happy days are starting ..');
}).then((msg) => {
  console.log(msg)
}).catch((errorMsg) => {
  console.log(errorMsg);
});
