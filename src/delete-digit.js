const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum=n.toString().split('');

let arr=[];

strNum.forEach((val,i)=>{
  strNum.splice(i,1);
  arr.push(parseInt(strNum.join('')))
  strNum.splice(i,0,val);
  
})
return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
