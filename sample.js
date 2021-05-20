
//Task 1
function convertFahrToCelsius(F) {

     if(isNumeric(F)){
       F = parseFloat(F);
         var answer = ((F-32)*5/9);
         return answer.toFixed(4);
 
  }
 return `${JSON.stringify(F)} is not a valid number but a/an ${typeof F}` ;
}                                                           
   function isNumeric(F){
    return !isNaN(F) && !parseFloat(F);

    
 }
 console.log(convertFahrToCelsius(F));


//Task  2

function checkYuGiOh(n){
    if(isNaN(n) || !parseInt(n)){
      return `invalid parameter:"${n}"`
    }
    var arr = []
    for(var i = 1; i <= n; i++){
      var y = i;
      if(i%2 === 0) {    
          y = 'yu'
      }
      if(i%3 === 0) {
        if(isNaN(y))
          y += '-gi'
        else 
          y = 'gi'
      }
      if(i%5 === 0) {
        if(isNaN(y))
          y += '-oh'
        else 
          y = 'oh'
      }
  
      arr.push(y);
    }
    return arr;
  }
  
  
  console.log(checkYuGiOh(n));
  