import { Utility } from './utility';
import { Problem } from './models/Problem';
import { Operand } from './models/Operand';

// import { Operand } from './operand';













// Not sure if really need this. 
// let options = new ProblemSetOptions(10, [new Operand(0, 10)]);
// let y = (new ProblemSet(4, "+")).Generate();



// console.log(y.Generate());
// console.log(y);


// let p = new Problem(
//           "+", 
//           [
//             new Operand(1, 5), 
//             new Operand(4, 6),
//             new Operand(500, 600),
//             new Operand(1000, 2000)
//           ]
//         );
        

let p = new Problem(
  "+", 
  [
    new Operand(1, 10), 
    new Operand(1, 10),
  ]
);
        
        
console.log(p);



