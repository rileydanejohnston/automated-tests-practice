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

## HTTP requests
Use SuperTest for a convenient way to test request handlers. SuperTest works a bit differently to test a server. It will:
* connect to the server
* run it's tests
* disconnect from the server
* finish it's tests
(documentation: https://github.com/visionmedia/supertest)

## setup
* install supertest with npm install --save-dev supertest
* create an endpoint.test.js file for the tests
* connect the library to this file with:
const supertest = require('supertest');
const app = require('./app.js'); 
* pass the supertest variable to the app (super test variable contains a function)
const request = supertest(app); 
* now we are ready!

## sending a request
* start with the request object. place return in front of it so Jest waits for the promise to resolve or be rejected
* add the request method (get, post, patch, put, etc)

describe('Endpoints respond to requests', () => {
  it('Returns data and status 200 on request to "/"', () => {
    return request.get('/').then((response) => {
            expect(response.status).toBe(200);
            expect(response.text).toBe('Hello, world!');
        });
  });
});

## configure requests
* set() sets attributes. *.set('Cookie', ['token=u1a90aw7812689adukqyw61;'])*
* send() adds data to the request body. *.send({ name: 'Mr Pink' })*
* query() allows us to configure get requests that don't have a body, only URL. *.query({ per_page: '50', offset: '20' })*
* attach() attaches a file to the request. *.attach('avatar', 'test/fixtures/avatar.jpg')*

Here's an example: 

1. A GET request to the / address returns the string 'Hello, world!' and the correct status.
2. A POST request to the /users address returns a JSON object with user data and the correct status indicating that the user has been created.

describe('Testing the app endpoints', () => {
    it('GET "/" must return "Hello, world!" and a correct status', () => {
      return request.get('/').then((response) => {
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, world!');
      })
    });
  
    it('POST "/users" must return correct user data in JSON format and a correct status', () => {
      return request.post('/users').then((response) => {
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch('application/json');
        expect(response.body.message).toBe('success');
        expect(response.body.data.isDeveloper).toBeTruthy();
        expect(response.body.data.followersOnGithub).toBeGreaterThan(10);
      });
    });
  });


**Question** When to use toMatch vs toBe with strings?