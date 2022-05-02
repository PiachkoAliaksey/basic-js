const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members===null || typeof members==='boolean'|| typeof members ==='number'||!(Array.isArray(members))){
    return false;
  }

  let membersArr=[...members];
  let membersNew=membersArr.filter(val => typeof val==='string').map((val)=>{
    return val.trim().toUpperCase().slice(0,1);
  });
  
  return membersNew.sort().join('');
}

module.exports = {
  createDreamTeam
};
