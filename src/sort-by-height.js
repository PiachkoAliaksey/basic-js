const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrA=[...arr];
  let arrNew=[...arr];
  let numberOfIndex=0;
  
  arrNew=arrNew.filter((val)=>{
    if(val!=-1){
      return val;
    }
  }).sort((a,b)=>{
    return a-b;

  })

  for (let i=0;i<arrA.length;i++){
    if(arr[i]!=-1){
      arrA[i]=arrNew[numberOfIndex];
      numberOfIndex++
    }
  }
 
  return arrA;
}

module.exports = {
  sortByHeight
};
