# automated-tests-practice with Jest

the objective is to get better at simple automated tests so I can move to more complicated testing for express backends. I'll start with fundamentals like syntax and methods. Eventually I want to be able to test for celebrate/joi validation, controllers, and various middlewares.

jest methods -> https://jestjs.io/docs/expect

## Here's the idea:
* The Describe function organizes tests into a suite. For example, you want to test all functions that happen when a user gets registered: the input validation, password hashing, interaction with the database. Each requires a different test. Each of these tests are contained in a suite - the describe function.

describe('testing the register user handler', () => {
  test('test that input is valid', () => {
    expect(validateInfo({ data: person }).toBe(??))
  })
})