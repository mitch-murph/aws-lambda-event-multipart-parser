import { parse } from './parse';

test('parse', () => {
  const event = {} 
  expect(parse(event)).toBe(event);
});
