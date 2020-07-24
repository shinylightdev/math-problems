import { Utility } from './utility';
import { Operand } from './operand';



/**
 * Options for creating a set of problems. 
 *
 * @class ProblemSetOptions
 */
class ProblemSetOptions {
  
  /**
   * Creates an instance of ProblemSetOptions.
   * @param {number} quantity
   * How many problems.
   * 
   * @param {Operand[]} operands
   * @memberof ProblemSetOptions
   */
  constructor(quantity: number, operands: Operand[]) {    
    this.Quantity = quantity;
    this.Operands = operands;
  }   
  
  /**
   * How many problems in the sheet. 
   *
   * @type {number}
   * @memberof ProblemSetOptions
   */
  public Quantity: number;
  
  
  /**
   * The min and max values for each operand (digit).
   *
   * @type {Operand[]}
   * @memberof ProblemSetOptions
   */
  public Operands: Operand[];  
}


/**
 * Set of problems that gets displayed on a page.
 *
 * @class ProblemSet
 */
class ProblemSet {  
  constructor() {
    this.Quantity = 0;    
    this.Problems = [];    
  }
  
  public Quantity: number;   
  public Problems: Problem[];
}


/**
 * Individual math problem to solve. 
 *
 * @class Problem
 */
class Problem {  
  constructor() {
      this.Operator = "";
      this.Operands = [];
      this.Answer = undefined;
      this.WrongAttempts = [];
  }
  
  public Operator: string; // + - / *  
  public Operands: Operand[];
  public Answer?: number;
  public WrongAttempts: number[];  
}







// Let's create a set of problems
let options = new ProblemSetOptions(10, [new Operand(0, 10)]);
//options = new ProblemSetOptions(10, [new Operand(0, 10)]);


console.log("oh hai");


