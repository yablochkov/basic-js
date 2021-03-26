const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (!date) return 'Unable to determine the time of year!';
      
  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
   } 

    let months = date.getMonth();
    if (months == 0 || months == 1 || months == 11){
    return 'winter';
  } else if (months == 2 || months == 3 || months == 4){
    return 'spring';
  } else if (months == 5 || months == 6 || months == 7){
    return 'summer';
  } else if (months == 8 || months == 9 || months == 10){
    return 'autumn';
  } 
 
};
