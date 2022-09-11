import { Problem } from './models/Problem';
import { Operand } from './models/Operand';

let p = new Problem(
          "-", 
          [
            new Operand(8, 23), 
            new Operand(4, 7),
            new Operand(2, 9),
          ]
        );
        
        
console.log("p.generateExpression() = " + p.generateExpression());
console.log("p.getAnswer() = " + p.getAnswer());
console.log("p.getSubtraction() = " + p.getSubtraction());
console.log("p.getSum() = " + p.getSum());
console.log("p.getProduct() = " + p.getProduct());
console.log("p.getQuotient() = " + p.getQuotient());



//let x = new ProblemSet(3, "+");




