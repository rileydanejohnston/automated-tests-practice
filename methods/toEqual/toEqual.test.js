const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [1, 2, 3, 4];

test('a toEqual b passes', () => {
  expect(a).toEqual(b);
})

test('a toEqual c fails', () => {
  expect(a).toEqual(c);
})

const objA = {
  first: '1',
  second: '2',
  third: '3'
}
const objB = {
  first: '1',
  second: '2',
  third: '3'
}
const objC = {
  first: 1,
  second: 2,
  third: 3
}

test('objA equal to objB will pass', () => {
  expect(objA).toEqual(objB);
})