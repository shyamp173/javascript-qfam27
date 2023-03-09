// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

arr = [1, 2, 3, 4, 3, 2, 4, 5, 6, 7, 3, 3, 2, 2, 6, 7, 8, 9];

let result = arr.reduce((obj, item) => {
  if (obj[item] == undefined) {
    obj[item] = 1;
    return obj;
  } else {
    obj[item]++;
    return obj;
  }
}, {});
console.log(result);
