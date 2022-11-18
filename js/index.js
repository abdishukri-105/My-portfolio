// function calculateAge(age){
  // return age * 6;
//};

//calculateAge();
// arrow functions 
// const old  = (x,y) =>{
//     return x * y;
// };

function calculateAge(age, x = 4){
    return age * x;

}

console.log(calculateAge(6));
