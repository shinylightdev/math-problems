/**
 * Set of problems that gets displayed on a page.
 *
 * @class ProblemSet
 */
 
 
namespace MathProblems {
  export class ProblemSet {

    constructor(quantity: number, operator: string) {
      this.Quantity = quantity;
      this.Operator = operator;
      this.Problems = [];

      // Do you still need the following?
      this.Options = new ProblemSetOptions(0, [new Operand(0, 0)]);
    }

    public Quantity: number;
    public Operator: string;
    public Problems: Problem[];
    public Options: ProblemSetOptions;


    /**
     * Generate an array of Problem. 
     *
     * @returns {Problem[]}
     * @memberof ProblemSet
     */
    public Generate(): Problem[] {
      let problems: Problem[] = [];
      for (let i = 0; i < this.Quantity; i++) {
        problems.push(
          new Problem("+", [new Operand(1, 5)])
        );
      }
      return problems;
    }
  }
}