
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  matrix.forEach((el) => el.forEach((el1) => newArr.push(el1)));
  return newArr.sort((a,b) => a-b);
}
