const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains:[],
  getLength() {
    this.chains.length;
  },
  addLink(value) {
    if(typeof value==='undefined'){
      this.chains.push(`(  )~~`);
      return this;
    }else{
      this.chains.push(`( ${value} )~~`);
      return this;
    }
    
  },
  removeLink(position) {
    if(typeof position!=='number'||this.chains.length<position||position<1||!(Number.isInteger(position))){
      this.chains.length=0;
      throw new Error("You can\'t remove incorrect link!");
    }else{
      this.chains.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let str=this.chains.join('');
    this.chains.length=0;
    return str.slice(0,str.length-2)
  }
};

module.exports = {
  chainMaker
};
