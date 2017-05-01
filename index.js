const data = ['first', 'second', 'third'];

function getData(index, cb) {
  let err = null;
  if (index < 0) { err = new Error('index out of bounds'); }
  return cb(err, data[index]);
}

// wrap getData in a promise and console log the output

function getDataPromisified(index, cb) {
  return new Promise((resolve, reject) => {
    let err = null;
    if (index < 0) { err = new Error('index out of bounds'); }
    if (err) {
      reject(err);
    } else {
      if (cb) {
        resolve([data[index], cb]);
      } else {
        resolve(data[index]);
      }
    }
  });
}

// call getData three times and console log the output (use .then for the second and third call) using promises

getDataPromisified(0)
.then ((data) => {console.log(data)});
getDataPromisified(1)
.then ((data) => {console.log(data)});
getDataPromisified(2)
.then ((data) => {console.log(data)});

// create a promise within getData and use the promise to trigger the callback in getData

getDataPromisified(0, (data) => {console.log(data)})
.then( (arr) => {
  arr[1](arr[0]);
});

// create a promisified version of getData


function getDataAsync(index) {
  return new Promise((resolve, reject) => {
    let err = null;
    if (index < 0) { err = new Error('index out of bounds'); }
    if (err) {
      reject(err);
    } else {
      resolve(data[index]);
    }
  })
  .then( (data) => {return data} )
  .catch( (err) => {console.log(err); return err});
}
// call the promisified version of getData with -1, console log the error in a .catch

getDataAsync(0);
getDataAsync(-1);