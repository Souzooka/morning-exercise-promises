const data = ['first', 'second', 'third'];

function getData(index, cb) {
  let err = null;
  if (index < 0) { err = new Error('index out of bounds'); }
  return cb(err, data[index]);
}

// wrap getData in a promise and console log the output

let getDataPromise = new Promise( (resolve, reject) => {
  resolve(null);
})
.then()

// call getData three times and console log the output (use .then for the second and third call) using promises

// create a promise within getData and use the promise to trigger the callback in getData

// create a promisified version of getData

function getDataPromisified(index) {
  return new Promise((resolve, reject) => {
    let err = null;
    if (index < 0) { err = new Error('index out of bounds'); }
    if (err) {
      reject(err);
    } else {
      resolve(data[index]);
    }
  });
}

getDataPromisified(2)
.then( (data) => {
  console.log(data);
});

// call the promisified version of getData with -1, console log the error in a .catch

getDataPromisified(-1)
.then( (data) => {

})
.catch( (err) => {
  console.log(err);
});