const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    
  let res = matrix.flat().filter(item => item === '^^');
  return res.length;
};
