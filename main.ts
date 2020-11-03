import { Problem } from './models/Problem';
import { Operand } from './models/Operand';

let p = new Problem(
          "+", 
          [
            new Operand(1, 5), 
            new Operand(4, 6),
            // new Operand(500, 600),
            // new Operand(1000, 2000)
          ]
        );
        
        
console.log(p.generateExpression());

console.log(p.getAnswer());
console.log(p.getSubtraction());
console.log(p.getSum());
        







// let p = new Problem(
//   "+", 
//   [
//     new Operand(1, 10), 
//     new Operand(1, 10),    
//   ]
// );
        
        
// console.log(p);


// let s = new Problem(
//   "-", 
//   [
//     new Operand(25, 100), 
//     new Operand(1, 25),    
//   ]
// );

// console.log(s);



//let x = new ProblemSet(3, "+");




