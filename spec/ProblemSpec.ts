// NOTE: This spec in TypeScript is based off implementation here:
//       https://stackoverflow.com/questions/30863565/unit-testing-using-jasmine-and-typescript

import { Problem } from '../models/Problem';
import { Operand } from '../models/Operand';
import { ProblemSet } from 'models/ProblemSet';

describe("Problem", function() {

  let problem = new Problem(
            "+", 
            [
              new Operand(1, 5), 
              new Operand(4, 6),
              new Operand(500, 600),
              new Operand(1000, 2000)
            ]
  );        

  it(problem.generateExpression() + " should return " + problem.getAnswer(), function() {
    
    expect(
      // Evaluate expression from string.
      eval(problem.generateExpression())    
    ).toEqual(
      // Compare against the actual answer from object. 
      problem.getAnswer()  
    );    
    
  });
  
  
});