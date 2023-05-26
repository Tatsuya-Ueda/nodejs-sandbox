// const promiseA = new Promise((resolve, reject) => {
//   resolve("this is returned data");
// });
// const promiseB = new Promise((resolve, reject) => {
//   reject(new Error("this is returned error"));
// });

const promiseX = (x) => {
  return new Promise((resolve, reject) => {
    if (typeof x === "number") {
      resolve(x);
    } else {
      reject(new Error("return error"));
    }
  });
};

const logAndDouble = (num) => {
  console.log(num);
  return num * 2;
};

promiseX(4)
  .then((data) => logAndDouble(data))
  .then((data) => logAndDouble(data))
  .catch((data) => console.log(data));

promiseX("aa")
  .then((data) => logAndDouble(data))
  .then((data) => logAndDouble(data))
  .catch((data) => console.log(data));

// promiseA.then((data) => console.log(data));
// promiseA.catch((data) => console.log(data));
// promiseB.catch((err) => console.error(err));
