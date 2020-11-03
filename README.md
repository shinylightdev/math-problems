# Math Problem Generator

Generates random addition and subtraction based on parameters.

## Usage

Let's import the following. 

```typescript
import { Problem } from './models/Problem';
import { Operand } from './models/Operand';
```

Now let's add two numbers:

```typescript
let problem = new Problem(
    "+", 
    [
      new Operand(1, 5), 
      new Operand(4, 6)
    ]
  );
```

```typescript

// Return something like "3+4"
console.log(p.generateExpression()); 

// Returns 7
console.log(p.getAnswer());

// Returns -1
console.log(p.getSubtraction());

// Returns 7
console.log(p.getSum());
```

## Testing

Currently tests are limited. Uses [Jasmine](https://jasmine.github.io/) to test. 

Installing Jasmine for TypeScript:
```bash
# Global Jasmine installation 
npm install -g jasmine

# TypeScript Jasmine types
npm install --save @types/jasmine
```


To run the tests:
```bash
npm test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)