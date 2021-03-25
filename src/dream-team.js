

module.exports = function createDreamTeam(members) {
  
  if (Array.isArray(members)) {

  
  let arr = members.filter(item => typeof item === 'string');
  let letters = [];
  for (let item of arr){
  letters = letters.concat(item.replace(/ /g, '').slice(0,1).toUpperCase());
  }

return letters.sort().join('');
  } else {
    return false;
  }
};
