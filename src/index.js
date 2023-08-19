
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  matrix.forEach((el,index) => el.forEach(function(el1){
  el.sort((a,b) => a-b); 
  if(index%2 !== 0){
    el.reverse();
  }
  }));
  matrix.forEach((el) => el.forEach((el1) => newArr.push(el1)));
  return newArr;
}
