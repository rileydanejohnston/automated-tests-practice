test('test same string equals same string', () => {
  expect('string').toBe('string');
})

test('1 greater than 0 to be true', () => {
  expect(1 > 0).toBe(true);
})

test('1 greater than 1 to be false', () => {
  expect(1 > 1).toBe(false);
})

test('1 === 1 to be false', () => {
  expect('1' === 1).toBe(false);
})

test('1 == 1 to be true', () => {
  expect('1' == 1).toBe(true);
})

const a = {};
const b = {};

// test passes
test('object reference to SAME object to be true', () => {
  expect(a).toBe(a);
})

// test fails
test('object reference to DIFFERENT object to fail', () => {
  expect(a).not.toBe(b);
})