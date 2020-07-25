import { Utility } from "../utility";

/**
 * The digits (operands) that the user will try to solve. 
 *
 * @class Operand
 */
export class Operand {
  /**
   * Creates an instance of Operand using min and max boundaries. 
   * @param {number} min
   * @param {number} max
   * @memberof Operand
   */
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


  /**
   * Generate an flat array of random operands based on Operand type.
   *
   * @static
   * @param {Operand[]} operands
   * @returns {number[]}
   * @memberof Operand
   */
  public static resolveOperands(operands: Operand[]): number[] {
    let operandList: number[] = [];

    operands.forEach(function (o: Operand) {
      operandList.push(Utility.getRandom(o.min, o.max));
    });

    return operandList;
  }

}
