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

test('not.toBe(value)', () => {
  const value = 1;
  expect(value).not.toBe(0);
});

test('toBeNull()', () => {
  expect(null).toBeNull();
});

test('toBeDefined()', () => {
  expect(1).toBeDefined();
});

test('not.toBeUndefined()', () => {
  expect(1).not.toBeUndefined();
});

test('not.toBeTruthy()', () => {
  expect(false).not.toBeTruthy();
});

test('toBeFalsy()', () => {
  expect(false).toBeFalsy();
});

test('number', () => {
  const value = 4;
  // 4 > 3
  expect(value).toBeGreaterThan(3);
  // 4 >= 3
  expect(value).toBeGreaterThanOrEqual(3.5);
  // 4 < 5
  expect(value).toBeLessThan(5);
  // 4 <= 5
  expect(value).toBeLessThanOrEqual(4.5);
  // 4 = 5
  expect(value).toBe(4);
  // 4 = 5
  expect(value).toEqual(4);
});

test('float', () => {
  const value = 0.1 + 0.1;
  // 0.1 + 0.1 = 0.2
  expect(value).toBeCloseTo(0.2);
});

test('string toMatch', () => {
  expect('save').not.toMatch(/I/);
  expect('Save you from anything').toMatch(/you/);
});

test('array toContain', () => {
  const list = ['Save', 'you', 'from', 'anything'];
  expect(list).toContain('you');
  expect(new Set(list)).toContain('you');
});

function errorFunction() {
  throw new Error('Save you from anything');
}

test('error toThrow', () => {
  expect(errorFunction).toThrow();
  expect(errorFunction).toThrow(Error);
  expect(errorFunction).toThrow('Save you from anything');
  expect(errorFunction).toThrow(/you/);
});