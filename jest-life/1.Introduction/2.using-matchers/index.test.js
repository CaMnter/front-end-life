/**
 * @author CaMnter
 */

test('toEqual(value)', () => {
  const object = { a: 1 };
  object['b']  = 2;
  expect(object).toEqual({
    a: 1,
    b: 2
  });
});