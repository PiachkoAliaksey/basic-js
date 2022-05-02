const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let arrNew=[...arr];

  for(let i=0;i<arrNew.length;i++){
  
    if(arrNew[i]==='--discard-next'){
      if(i===arrNew.length-1){
         arrNew.splice(i,1);
      }else{
        if(arrNew[i+2]==='--double-prev'||arrNew[i+2]==='--discard-prev'){
        arrNew.splice(i+1,2);
        arrNew.splice(i,1);
      }else{
          arrNew.splice(i,2);
          
      }
        
      }
      
    }
  if(arrNew[i]==='--discard-prev'){
    if(i===0){
       arrNew.splice(i,1);
    }else{
      arrNew.splice(i-1,2);
    }   
      
    }
  if(arrNew[i]==='--double-next'){
    console.log(i);
    if(i===arrNew.length-1){
      arrNew.splice(i,1);
    }else{
      arrNew.splice(i+1,0,arrNew[i+1]);
      arrNew.splice(i,1);
      
    }
      
      
    }
  if(arrNew[i+1]==='--double-prev'){
    console.log(i);
    if(i===0){
      arrNew.splice(i,1);
    }else{
       arrNew.splice(i+1,1);
        arrNew.splice(i-1,0,arrNew[i]);
    }
      
      
    }
  }


return arrNew;
}

module.exports = {
  transform
};
