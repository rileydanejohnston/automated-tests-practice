# automated-tests-practice with Jest

the objective is to get better at simple automated tests so I can move to more complicated testing for express backends. I'll start with fundamentals like syntax and methods. Eventually I want to be able to test for celebrate/joi validation, controllers, and various middlewares.

jest methods -> https://jestjs.io/docs/expect

## example - this is the idea
describe('check the randomizer function returns a number, greater than 10, less than 80', () => {
  // test for a number type
  test('randomizer result is a number type, greater than 10, less than 80', () => {
    expect(randomizer()).not.toBeNaN();
    expect(randomizer()).toBeGreaterThan(10);
    expect(randomizer()).toBeLessThan(80);
  });
});

describe - a test suite, use this to organize a collection of tests. An example is testing a register handler. The register handler may have input validation, password hashing, and doing something to the DB. Each of these functions need to be tested. Each of these tests can be grouped in a descibe statement

test - test or it is how we group a collection of expect statements, where we test the outcomes of a function:
* Does it return a number?
* does it return a number greater than 1?
* does it return a number less than 500?
These can be grouped within a single test.

expect -> matcher function. This is how we test a behavior/condition of a function. We expect the randomizer() function to return a number.

