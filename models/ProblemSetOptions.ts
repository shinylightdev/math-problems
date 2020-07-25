import { Operand } from './Operand';

/**
 * Options for creating a set of problems. 
 *
 * @class ProblemSetOptions
 */
 export class ProblemSetOptions {

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