const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strAr=str.split('')


let arr=[]



strAr.forEach((val)=>{
  if(arr.length===0){
    arr.push(val);
  }
  for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
       arr.pop()
       }
    if(arr[i]!==val){
      arr.push(val)
      
    }
  }
  
})

for(let i=0;i<arr.length;i++){
  let count=0;
  for(let j=0;j<strAr.length;j++){
    if(arr[i]===strAr[j]){
      count++;
    }
  }
  if(count===1){
    arr[i]=arr[i]
  }else{
    arr[i]=count+arr[i]
  }
  count=0;
}

return arr.join('')
}

module.exports = {
  encodeLine
};
