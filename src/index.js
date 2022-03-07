
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []
   if (!matrix){
    return newArr
   } else{
  matrix.forEach((elem,ind) => {
  
        if(ind % 2 === 0){   
            newArr = newArr.concat(elem)

        }else{
            elem.reverse()
            newArr = newArr.concat(elem)
        }
        
    });
  }
    return newArr
}
