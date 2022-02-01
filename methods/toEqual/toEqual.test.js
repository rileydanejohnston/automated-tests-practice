const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [1, 2, 3, 4];

test('comparing arrays', () => {
  expect(a).toEqual(b);
  expect(a).not.toEqual(c);
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

test('comparing objects', () => {
  expect(objA).toEqual(objB);
  expect(objA).not.toEqual(objC);
})