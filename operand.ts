/**
 * The digits (operands) that the user will try to solve. 
 *
 * @class Operand
 */
export class Operand {  
  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }  
  /**
   * This is the lowest the number that it can be.
   *
   * @type {number}
   * @memberof Operand
   */
  min: number;
  
  
  /**
   * This is the highest number that it can be.
   *
   * @type {number}
   * @memberof Operand
   */
  max: number;  
}