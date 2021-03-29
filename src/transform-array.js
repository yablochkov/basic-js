const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(arr === undefined || arr.length === null){
        return null;}
    if (!Array.isArray){
        throw new Error();
       } 
    if (arr.length == 0) return [];
    let newArr = [];
    for (let item = 0; item < arr.length; item++){

      if(arr[item] == '--double-next'){
        if (arr[item + 1] != undefined)
          newArr.push(arr[item + 1]);

      } else if (arr[item] == '--double-prev'){
        if(arr[item - 2] !== '--discard-next' && arr[item - 1] != undefined){
        newArr.push(newArr[newArr.length - 1]);
        }
       
     } else if (arr[item] == '--discard-next'){
       item++;
     
    } else if (arr[item] == '--discard-prev'){
       if(arr[item - 2] !== '--discard-next' && arr[item - 1] !== undefined){
       newArr.pop();
       }
    
     } else {
       newArr.push(arr[item]);
     }
   }
    return newArr;
}
